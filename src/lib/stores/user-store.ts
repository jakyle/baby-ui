import { goto } from "$app/navigation";
import { Auth } from "aws-amplify";
import { writable, derived } from "svelte/store";
import { isLoading } from "./loading-store";
import { page } from '$app/stores';

export type AuthState = 
	| 'login' 
	| 'reset' 
	| 'mfa' 
	| 'mfa-setup' 
	| 'signout';

export const authStateStore = writable<AuthState>('login');
export const userNameStore = writable<string>('');
export const userStore = writable(null);
export const mfaSetupStore = writable<null | {qr: string, code: string}>(null);
export const isLoggedIn = derived(authStateStore, (state) => state === 'signout');



export async function signIn(email: string, password: string) {
	try {
		isLoading(true);
		const userResponse = await Auth.signIn(email.trim(), password);
		await authWorkFlow(userResponse);
		isLoading(false);
	} catch (error) {
		console.log('error signing in', error);
		error = error;
	}
}

export async function resetPassword(user: any, newPassword: string) {
	try {
		isLoading(true);
		const userResponse = await Auth.completeNewPassword(
			user, // the Cognito User Object
			newPassword // the new password // OPTIONAL, the required attributes
		);
		await authWorkFlow(userResponse);
		isLoading(false);
	} catch (error) {
		console.log('error signing in', error);
		error = error;
	}
}

export async function authWorkFlow(userResponse: any) {
	switch (userResponse.challengeName ?? '') {
		case 'NEW_PASSWORD_REQUIRED': {
			authStateStore.set('reset');
			userStore.set(userResponse);
			break;
		}
		case 'MFA_SETUP': {
			await setupOTP(userResponse);
			break;
		}
		case 'SOFTWARE_TOKEN_MFA': {
			authStateStore.set('mfa');
			break;
		}
		default: {
			isLoading(true);
			const currentUser = await Auth.currentAuthenticatedUser();
			if (currentUser?.signInUserSession) {
				setLogoutState(currentUser);
			}
			isLoading(false);
		}
	}
}

export function setLogoutState(currentUser: any) {
	userNameStore.set(currentUser?.signInUserSession?.idToken.payload?.email ?? 'nouser');
	userStore.set(currentUser);
	authStateStore.set('signout');
}

export async function submitMfa(user: any, challengeCode: string) {
	try {
		await Auth.verifyTotpToken(user, challengeCode.trim());
		const successCode = await Auth.setPreferredMFA(user, 'TOTP');

		if (successCode === 'SUCCESS') {
			await confirmSignIn(user, challengeCode);
		}
	} catch (error) {
		console.log(error);
		error = error;
	}
}

export async function setupOTP(userResponse: any) {
	isLoading(true);
	const code = await Auth.setupTOTP(userResponse);
	const qr = 'otpauth://totp/AWSCognito:' + userResponse.username + '?secret=' + code;
	mfaSetupStore.set({qr, code});
	authStateStore.set('mfa-setup');
	userStore.set(userResponse);
	isLoading(false);
};

export async function logout() {
	isLoading(true);
	userStore.set(null);
	authStateStore.set('login');
	isLoading(false);
}

export async function confirmSignIn(user: any, challengeCode: string) {
	isLoading(true);
	await Auth.confirmSignIn(user, challengeCode, 'SOFTWARE_TOKEN_MFA');
	const currentUser = await Auth.currentAuthenticatedUser();
	isLoading(false);
	if (currentUser?.signInUserSession) {
		setLogoutState(currentUser);
	}
}