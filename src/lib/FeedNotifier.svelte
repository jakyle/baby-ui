<script lang="ts">
	import { fade } from 'svelte/transition';
	import { isClientInRect } from '../util/html-helpers';
	import CardContainer from './CardContainer.svelte';
	import { feedingProgress, sendFeeding } from './stores/feeding-store';
	import { userNameStore } from './stores/user-store';

	const dateObj = new Date();
	let date = dateObj.toLocaleDateString('sv');
	let time = dateObj.toLocaleTimeString('sv');
	let oz = 4;

	let submitButton: HTMLButtonElement | null = null;

	$: ounces = `${oz} OZ`;
	const SECONDS = 2;
	const SEND_TIMER = SECONDS * 1000;
	let timeout: NodeJS.Timeout | null = null;

	const handleStartTimer = () => {
		if (!$feedingProgress) {
			feedingProgress.update(() => true);

			timeout = setTimeout(() => {
				if ($feedingProgress) {
					$feedingProgress = false;
					sendFeeding(date, time, oz, $userNameStore);
				}
			}, SEND_TIMER);
		}
	};

	const touchMoveHandler = (event: TouchEvent) => {
		if (!$feedingProgress) {
			return;
		}

		const rect = submitButton!.getBoundingClientRect();
		const isClientTouchingRect = Array.from(event.touches).some((client) =>
			isClientInRect(rect, client)
		);

		if (!isClientTouchingRect) $feedingProgress = false;
	};

	const handleStopTimer = () => {
		$feedingProgress = false;
		if (timeout) clearTimeout(timeout);
	};

	$: buttonText = $feedingProgress ? 'FEEDING...' : 'FED';
</script>

<CardContainer>
	<div class="flex w-full flex-col justify-between gap-2 sm:flex-row-reverse lg:flex-col-reverse">
		{#await $feedingProgress then isFeeding}
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
				class="btn-xl bg-base-300 text-base-content transition-color btn h-24 sm:basis-1/3 flex-col gap-1 text-lg 2xs:text-xl xs:text-2xl sm:text-3xl ease-in-back"
				class:duration-100={!isFeeding}
				class:duration-2000={isFeeding}
				class:btn-info={isFeeding}
			>
				<span>{buttonText}</span>
				<div class="flex">
					<span
						in:fade={{ duration: 100 }}
						class:hidden={!isFeeding}
						class="animate-spin-slow">🍼</span
					>
					<span class:animate-pulse={isFeeding}>🧑‍🍼</span>
					<span
						in:fade={{ duration: 100 }}
						class:hidden={!isFeeding}
						class="animate-reverse-spin-slow">🍼</span
					>
				</div>
			</button>
		{/await}
		<div
			class="flex w-full flex-col gap-4 sm:flex-row sm:flex-wrap sm:basis-2/3 lg:flex-nowrap lg:justify-around lg:gap-0"
		>
			<input
				type="date"
				class="input-bordered input w-full sm:w-5/12 text-xl sm:text-lg lg:w-64"
				bind:value={date}
			/>

			<input
				type="time"
				class="input-bordered input w-full sm:w-6/12 text-xl sm:text-lg lg:w-64"
				bind:value={time}
			/>

			<label class="input-group lg:w-64">
				<input type="range" min="1" max="12" class="range range-lg" bind:value={oz} />
				<span class="w-28 lg:h-8">{ounces}</span>
			</label>
			<div />
			<!-- TODO: Create custom date time picker -->
		</div>
	</div>
</CardContainer>
