<script lang="ts">
	import '../app.css';
	import { Auth, Amplify } from 'aws-amplify';
	import { feedingSubscription } from '../api/feeding';
	import awsconfig from '../aws-exports';
	import Overlay from '../lib/Overlay.svelte';
	import { page } from '$app/stores';
	import { beforeNavigate } from '$app/navigation';
	import { goto } from '$app/navigation';
	import { authStateStore, initializeUser, isLoggedIn, userNameStore, userStore } from '$lib/stores/user-store';
	import { setFeedingData, tryAddFeeding } from '$lib/stores/feeding-store';

	Amplify.configure(awsconfig);
	setFeedingData();

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

{#await $isLoggedIn then isLoggedIn}
	<div class="relative flex h-screen w-screen flex-col bg-primary">
		<nav
			class="navbar sticky flex-none   justify-around bg-base-100 sm:justify-start sm:gap-10 sm:pl-5"
		>
			<a class="link uppercase" href="/">home</a>
			<a class="link uppercase" href="/feed-tracker">feeding</a>
			<a class="link uppercase" href="/log">log</a>
			{#if isLoggedIn}
				<a class="link uppercase" href="/auth/signout">logout</a>
			{/if}
		</nav>
		<div class="flex-1">
			<Overlay />
			<slot />
		</div>
	</div>
{/await}
