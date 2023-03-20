<script lang="ts">
	import { goto } from '$app/navigation';
	import { fly } from 'svelte/transition';
	import { clickOutside } from '../util/use-click-outside';
	import Icon from './icons/Icon.svelte';
	import { shouldOverlay, showSideDrawer } from './stores/overlay-store';
	import { isLoggedIn } from './stores/user-store';

	const handleShowSideBar = () => {
		$showSideDrawer = true;
	};

	const closeSideBar = () => {
		$showSideDrawer = false;
	};

	const navigate = (route: string) => {
		closeSideBar();
		goto(route);
	};

	const transition = { x: 200 };
</script>

{#await $showSideDrawer then showBar}
	{#if showBar}
		<div class="pointer-events-auto absolute z-10 flex h-screen w-screen flex-row-reverse">
			<nav
				in:fly={transition}
				out:fly={transition}
				use:clickOutside={closeSideBar}
				class="flex h-screen w-1/2 flex-col items-start gap-16 bg-base-100 px-4 pt-16 shadow-sm [&>button]:flex [&>button]:w-full [&>button]:justify-center"
			>
				<button class="uppercase" on:click={() => navigate('/')}>home</button>
				<button class="uppercase" on:click={() => navigate('/log')}>log</button>
				{#if $isLoggedIn}
					<button class="uppercase" on:click={() => navigate('/auth/signout')}>logout</button>
				{/if}
			</nav>
		</div>
	{:else if !$shouldOverlay}
		<div class="absolute flex w-full flex-row-reverse p-4">
			<button
				on:click={handleShowSideBar}
				in:fly={transition}
				out:fly={transition}
				class="btn-circle btn pointer-events-auto opacity-60 hover:opacity-100"
			>
				<Icon icon="menu" />
			</button>
		</div>
	{/if}
{/await}
