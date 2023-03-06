<script lang="ts">
	import { currentFeedingModel, feedingCountDown, feedingProgress } from './stores/feeding-store';
</script>

{#await $currentFeedingModel}
	<p class="text-primary">getting the data</p>
{:then { time, date, nextFeeding, oz, fedBy }}
	<div
		class="flex w-full flex-col transition-opacity"
		class:opacity-20={$feedingProgress}
	>
		<div class="stats stats-vertical sm:stats-horizontal shadow">
			<div class="stat justify-items-center">
				<div class="stat-title">Last Fed</div>
				<div class="stat-value text-2xl">{time}</div>
				<div class="stat-desc text-lg">{date}</div>
			</div>

			<div class="stat justify-items-center">
				<div class="stat-title">Next Feeding at</div>
				<div class="stat-value text-2xl ">{nextFeeding}</div>
				<div class="stat-desc text-xl">{$feedingCountDown}</div>
			</div>

			<div class="stat justify-items-center">
				<div class="stat-title">Fed</div>
				<div class="stat-value text-3xl">{oz} OZ</div>
				<div class="stat-desc text-lg">By: {fedBy}</div>
			</div>
		</div>
	</div>
{:catch error}
	<p class="text-error">no data {error.toString()}</p>
{/await}
