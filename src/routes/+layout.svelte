<script lang="ts">
	import '../app.css';
	import { Auth, Amplify, Hub } from 'aws-amplify';
	import { feedingSubscription } from '../api/feeding';
	import awsconfig from '../aws-exports';
	import Overlay from '../lib/Overlay.svelte';
	import { page } from '$app/stores';
	import { beforeNavigate } from '$app/navigation';
	import { goto } from '$app/navigation';
	import { authStateStore, initializeUser, userNameStore, userStore } from '$lib/stores/user-store';
	import { setFeedingData, tryAddFeeding } from '$lib/stores/feeding-store';
	import { CONNECTION_STATE_CHANGE, ConnectionState } from '@aws-amplify/pubsub';
	import { pushNotification, Notification } from '$lib/stores/notification-store';

	Amplify.configure(awsconfig);

	let priorConnectionState = ConnectionState.Disconnected;
	let canUpdatePushNotification = false;
	setTimeout(() => (canUpdatePushNotification = true), 1000);
	Hub.listen('api', (data: any) => {
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

	feedingSubscription().subscribe((value) => {
		const { By, DateTime, Id, Oz } = value.value.data.onCreateFeeding;
		tryAddFeeding({ by: By, dateTime: DateTime, id: Id, oz: Oz });
	});

	async function needsToLogin(route: string) {
		if (route) {
			try {
				if (route.includes('auth')) {
					return true;
				}
				const currentUser = await Auth.currentAuthenticatedUser();

				if (currentUser?.signInUserSession) {
					const [userName, user] = [$userNameStore, $userStore];
					if (userName.length < 1 || user === null) {
						await initializeUser();
					}
					authStateStore.set('signout');
					return true;
				} else {
					throw new Error();
				}
			} catch (error) {
				authStateStore.set('login');
				goto(`${$page.url.origin}/auth/login`);
				return false;
			}
		}
	}

	needsToLogin($page?.route.id ?? '');

	beforeNavigate(async (beforeNavigate) => {
		const shouldNavigate = await needsToLogin(beforeNavigate.to?.url.pathname ?? '');
		if (!shouldNavigate) {
			beforeNavigate.cancel();
		}
	});
</script>

<div class="relative flex h-screen w-screen flex-col bg-primary">
	<div class="flex-1">
		<Overlay />
		<slot />
	</div>
</div>
