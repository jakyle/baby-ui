<script lang="ts">
	import CardContainer from '$lib/CardContainer.svelte';
	import { feedingProgress, sendFeeding } from '$lib/stores/feeding-store';
	import { userNameStore } from '$lib/stores/user-store';
	import { fade } from 'svelte/transition';
	import { isClientInRect } from '../../util/html-helpers';


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
		const isClientTouchingRect = Array.from(event.touches).some((client) => isClientInRect(rect, client));

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
				class="btn-xl transition-color btn h-24 flex-col gap-1 bg-base-300 text-lg text-base-content ease-in-back 2xs:text-xl xs:text-2xl sm:basis-1/3 sm:text-3xl"
				class:duration-100={!isFeeding}
				class:duration-2000={isFeeding}
				class:btn-info={isFeeding}
			>
				<span>{buttonText}</span>
				<div class="flex">
					<span in:fade={{ duration: 100 }} class:hidden={!isFeeding} class="animate-spin-slow">🍼</span>
					<span class:animate-pulse={isFeeding}>🧑‍🍼</span>
					<span
						in:fade={{ duration: 100 }}
						class:hidden={!isFeeding}
						class="animate-reverse-spin-slow"
					>🍼</span>
				</div>
			</button>
		{/await}
		<div class="grid gap-2 sm:basis-2/3 lg:flex-nowrap lg:justify-around lg:gap-0">
			<div class="form-control  row-start-1  text-xl  lg:w-64">
				<label class="input-group sm:input-group-sm">
					<span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="h-6 w-6"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
							/>
						</svg>
					</span>
					<input type="date" class="input-bordered input w-full" bind:value={date} />
				</label>
			</div>

			<div class="form-control  row-start-2 text-xl sm:input-group-sm lg:w-64">
				<label class="input-group">
					<span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="h-6 w-6"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
					</span>
					<input type="time" class="input-bordered input w-full" bind:value={time} />
				</label>
			</div>

			<label class="input-group   row-start-3 lg:w-64">
				<input type="range" min="1" max="12" class="range range-lg" bind:value={oz} />
				<span class="w-28 lg:h-8">{ounces}</span>
			</label>
		</div>
	</div>
</CardContainer>
