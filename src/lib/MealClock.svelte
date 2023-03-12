<script lang="ts">
	import { currentFeedingModel, feedingCountDown, feedingProgress } from './stores/feeding-store';
</script>

{#await $currentFeedingModel}
	<p class="text-primary">getting the data</p>
{:then { time, date, nextFeeding, oz, fedBy }}
	<div
		class="flex w-full flex-row flex-wrap justify-between gap-1 transition-opacity child:rounded child:bg-base-100 child:p-2 child:text-center"
		class:opacity-20={$feedingProgress}
	>
		<div class="w-full basis-[49%] justify-items-center gap-0 landscape:sm:basis-3/12">
			<div class="stat-title">Last Fed</div>
			<div class="stat-value text-2xl">{time}</div>
			<div class="stat-desc text-lg">{date}</div>
		</div>

		<div class="w-full flex flex-row  items-center basis-[49%] gap-1 justify-items-center landscape:sm:basis-3/12">
			<div class="stat-title text-6xl">🍼</div>
			<div class="flex flex-col items-start">
				<div class="stat-value text-3xl">{oz} OZ</div>
				<div class="stat-desc text-lg">By: {fedBy}</div>
			</div>
		</div>

		<div class="w-full flex flex-row  gap-2 items-center landscape:sm:basis-3/12">

			<div class="w-20 h-20">
				<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
						/>
					</svg>
			</div>

			<div class="flex flex-col items-start">

				<div class="stat-title">
					Next Feeding
				</div>
				<div class="stat-value text-2xl ">{nextFeeding}</div>
				<div class="stat-desc text-xl">{$feedingCountDown}</div>

			</div>
		</div>
	</div>
{:catch error}
	<p class="text-error">no data {error.toString()}</p>
{/await}
