<script lang="ts">
	import { currentNotifier } from './stores/notifier-store';
	import FeedNotifier from './Notifiers/FeedNotifier.svelte';
	import { fade, fly } from 'svelte/transition';

	const closeNotifier = () => {
		currentNotifier.set(null);
	};
</script>

{#await $currentNotifier then notifier}
	{#if notifier !== null}
		<div class="flex h-full w-full items-end justify-center">
			<div transition:fly={{ y: 150, duration: 800 }} class="pointer-events-auto relative">
				<button
					class="btn-secondary btn-circle btn absolute -top-6 -right-6 z-10"
					on:click={closeNotifier}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="h-7 w-7"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
				{#if notifier === 'feeding'}
					<FeedNotifier />
				{/if}
			</div>
		</div>
	{/if}
{/await}
