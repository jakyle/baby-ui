<script lang="ts">
	import { currentNotifier } from './stores/notifier-store';
	import FeedNotifier from './Notifiers/FeedNotifier.svelte';
	import { fly } from 'svelte/transition';
	import MealClock from './MealClock.svelte';
	import type { ComponentType } from 'svelte';
	import { isClientInRect } from '../util/html-helpers';

	let dataContainer: HTMLDivElement;
	let notifierContainer: HTMLDivElement;

	type NotifierObj = {
		data: ComponentType;
		notifier: ComponentType;
	};

	const notifierMap: Record<string, NotifierObj> = {
		feeding: {
			data: MealClock,
			notifier: FeedNotifier
		}
	};

	const tryCloseOverlay = ({
		clientX,
		clientY
	}: MouseEvent & {
		currentTarget: EventTarget & HTMLElement;
	}) => {
		if ($currentNotifier) {
			const rects = [
				dataContainer!.getBoundingClientRect(),
				notifierContainer!.getBoundingClientRect()
			];

			const clickedInDiv = rects.some((rect) => isClientInRect(rect, { clientX, clientY }));

			if (!clickedInDiv) {
				closeNotifier();
			}
		}
	};

	const closeNotifier = () => {
		currentNotifier.set(null);
	};
</script>

{#await $currentNotifier then notifier}
	{#if notifier !== null}
		<div
			on:click={tryCloseOverlay}
			on:keydown
			on:keyup
			class="pointer-events-auto flex h-full  w-full flex-col items-center justify-between"
		>
			<div
				in:fly={{ y: -150, duration: 600 }}
				out:fly={{ y: -150, duration: 200 }}
				bind:this={dataContainer}
				class="h-fit w-fit"
			>
				<svelte:component this={notifierMap[notifier].data} />
			</div>

			<div
				in:fly={{ y: 150, duration: 600 }}
				out:fly={{ y: 150, duration: 200 }}
				bind:this={notifierContainer}
				class="h-fit w-fit overflow-hidden"
			>
				<svelte:component this={notifierMap[notifier].notifier} />
			</div>
		</div>
	{/if}
{/await}
