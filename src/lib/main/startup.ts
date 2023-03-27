/* eslint-disable no-fallthrough */
import { CONNECTION_STATE_CHANGE, ConnectionState } from '@aws-amplify/pubsub';
import { setFeedingData } from '$lib/stores/feeding-store';
import { pushNotification, Notification } from '$lib/stores/notification-store';
import { Auth, Hub } from 'aws-amplify';
import { goto } from '$app/navigation';
import { get } from 'svelte/store';
import { page } from '$app/stores';


import { initializeUser, authStateStore, userNameStore, userStore } from '$lib/stores/user-store';
import { caregiverStore } from '$lib/stores/caregiver-store';

export const startup = () => {
	let priorConnectionState = ConnectionState.Disconnected;
	let canUpdatePushNotification = true;
	setTimeout(() => (canUpdatePushNotification = true), 1000);
	Hub.listen('api', data => {
		const { payload } = data;
		if (payload.event === CONNECTION_STATE_CHANGE) {
			if (
				priorConnectionState === ConnectionState.Connecting &&
				payload.data.connectionState === ConnectionState.Connected
			) {
				setFeedingData();
			}

			if (canUpdatePushNotification) {
				switch (payload.data.connectionState) {
					case ConnectionState.Connected: {
						pushNotification('Connection Re-Established');
						break;
					}
					case ConnectionState.Disconnected: {
						pushNotification('Lost connection', Notification.ERROR, 10000);
					}
					case ConnectionState.ConnectionDisrupted:
					case ConnectionState.ConnectionDisruptedPendingNetwork:
					case ConnectionState.ConnectedPendingNetwork: {
						pushNotification('Experience Connectivity issues', Notification.WARNING);
					}
					default:
						break;
				}
			}

			priorConnectionState = payload.data.connectionState;
		}
	});

	async function needsToLogin(route: string) {
		if (route) {
			try {
				if (route.includes('auth')) {
					return true;
				}
				const currentUser = await Auth.currentAuthenticatedUser();

				if (currentUser?.signInUserSession) {
					const [userName, user] = [get(userNameStore), get(userStore)];
					if (userName.length < 1 || user === null) {
						await initializeUser();
					}

					const caregiver = get(caregiverStore);
					console.log(caregiver);

					if (caregiver === null) {
						throw new Error("No Caregiver which isn't great...");
					}

					if (caregiver.family === null) {
						goto(`${get(page).url.origin}/family/create`);
						return true;
					}

					authStateStore.set('signout');
					return false;
				} else {
					throw new Error();
				}
			} catch (error) {
				authStateStore.set('login');
				goto(`${get(page).url.origin}/auth/login`);
				return true;
			}
		}
	}

	return {
		needsToLogin,
	}
}