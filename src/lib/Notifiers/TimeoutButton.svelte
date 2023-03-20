<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { isClientInRect } from '../../util/html-helpers';

	type Prefix = 'start' | 'stop' | 'finish';
	type DispatchType = `${Prefix}Timer`;

	const SECONDS = 2;
	const SEND_TIMER = SECONDS * 1000;
	export let timeoutIn = SEND_TIMER;

	let submitButton: HTMLButtonElement | null = null;
	let timeout: NodeJS.Timeout | null = null;

	const dispatch = createEventDispatcher();
	const dispatchHandler = (event: DispatchType) => {
		dispatch(event);
	};

	const touchMoveHandler = (event: TouchEvent) => {
		if (timeout === null) {
			return;
		}

		const rect = submitButton!.getBoundingClientRect();
		const isClientTouchingRect = Array.from(event.touches).some((client) =>
			isClientInRect(rect, client)
		);

		if (!isClientTouchingRect) {
			handleStopTimer();
		}
	};

	const handleStopTimer = () => {
		if (timeout) {
			dispatchHandler('stopTimer');
			clearTimeout(timeout);
			timeout = null;
		}
	};

	const handleStartTimer = () => {
		if (timeout === null) {
			dispatchHandler('startTimer');
			timeout = setTimeout(() => {
				dispatchHandler('finishTimer');
				timeout = null;
			}, timeoutIn);
		}
	};
</script>

<button
	on:mouseleave={handleStopTimer}
	on:touchcancel={handleStopTimer}
	on:touchend={handleStopTimer}
	on:mouseup={handleStopTimer}
	on:touchmove={touchMoveHandler}
	on:touchstart={handleStartTimer}
	on:mousedown={handleStartTimer}
	on:contextmenu|preventDefault
	bind:this={submitButton}
>
	<slot />
</button>
