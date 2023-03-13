<script lang="ts">
	import { onMount } from 'svelte';
	import {  Auth } from 'aws-amplify';
	import { setLogoutState, authStateStore } from '../../lib/stores/user-store';
	import { goto } from '$app/navigation';
	import CardContainer from '$lib/CardContainer.svelte';
	import { page } from '$app/stores';

	authStateStore.subscribe(async (state) => await goto(`${$page.url.origin}/auth/${state}`));

	onMount(async () => {
		try {
			const currentUser = await Auth.currentAuthenticatedUser();
			if (currentUser?.signInUserSession) {
				setLogoutState(currentUser);
				authStateStore.set('signout');
			} else {
				throw new Error();
			}
		} catch (error) {
			authStateStore.set('login')
		}
	});
</script>

<div class="flex h-full w-full items-center justify-center">
		  <slot />
</div>
