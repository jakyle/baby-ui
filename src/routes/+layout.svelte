<script lang="ts">
	import '../app.css';
	import { Auth, Amplify } from 'aws-amplify';
	import awsconfig from '../aws-exports';
	import Overlay from '../lib/Overlay.svelte';
	import { page } from '$app/stores';
	import { beforeNavigate } from '$app/navigation';
	import { goto } from '$app/navigation';
	import { authStateStore, isLoggedIn, setLogoutState } from '$lib/stores/user-store';

	Amplify.configure(awsconfig);

	async function needsToLogin(route: string) {
		if (route) {
			try {
				const currentUser = await Auth.currentAuthenticatedUser();
				if (currentUser?.signInUserSession) {
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

{#await $isLoggedIn then isLoggedIn}
	<div class="relative flex h-screen w-screen flex-col bg-primary">
		<nav class="navbar sticky flex-none bg-neutral">
			<div class="navbar-start ml-4 flex gap-4">
				<a class="link uppercase" href="/">home</a>
				<a class="link uppercase" href="/feed-tracker">feeding</a>
				<a class="link uppercase" href="/log">log</a>
				{#if isLoggedIn}
					<a class="link uppercase" href="/auth/signout">logout</a>
				{/if}
			</div>
		</nav>
		<div class="flex-1">
			<Overlay />
			<slot />
		</div>
	</div>
{/await}
