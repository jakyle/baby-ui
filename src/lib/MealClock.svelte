<script lang="ts">
	import { fly } from 'svelte/transition';
	import Icon from './icons/Icon.svelte';
	import { currentFeedingModel, feedingCountDown, feedingProgress } from './stores/feeding-store';
</script>

{#await $currentFeedingModel}
	<p class="text-primary">getting the data</p>
{:then { time, date, nextFeeding, oz, fedBy }}
	<div
		class="grid w-full  gap-1 transition-opacity child:rounded child:bg-base-100 child:p-2 child:text-center"
		class:opacity-20={$feedingProgress}
	>
		<div
			in:fly={{ x: -100, duration: 600 }}
			class="col-start-1 row-start-1 flex  w-full flex-col justify-items-center gap-0"
		>
			<div class="stat-title">Last Fed</div>
			<div class="stat-value text-lg 2xs:text-xl xs:text-2xl">{time}</div>
			<div class="stat-desc text-lg">{date}</div>
		</div>

		<div
			in:fly={{ x: 100, duration: 600 }}
			class="col-start-2 row-start-1 flex w-full flex-row items-center justify-items-center gap-1"
		>
			<div class="stat-title  text-4xl xs:text-5xl sm:text-6xl">🍼</div>
			<div class="flex flex-col items-start">
				<div class="stat-value text-lg  xs:text-2xl sm:text-3xl">{oz} OZ</div>
				<div class="stat-desc text-lg">By: {fedBy}</div>
			</div>
		</div>

		<div
			class="col-start-1 col-end-3 row-start-2 flex w-full flex-row items-center gap-2 landscape:sm:col-start-3 landscape:sm:row-start-1"
		>
			<Icon icon="empty-calendar" />

			<div class="flex flex-col items-start">
				<div class="stat-title">Next Feeding</div>
				<div class="stat-value text-base  2xs:text-lg xs:text-xl sm:text-2xl ">{nextFeeding}</div>
				<div class="stat-desc text-base xs:text-lg sm:text-xl">{$feedingCountDown}</div>
			</div>
		</div>
	</div>
{:catch error}
	<p class="text-error">no data {error.toString()}</p>
{/await}
