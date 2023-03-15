<script lang="ts">
	import FeedingProgress from '$lib/FeedingProgress.svelte';
	import FeedNotifier from '$lib/Notifiers/FeedNotifier.svelte';
	import MealClock from '$lib/MealClock.svelte';
</script>

<div
	class="relative flex h-full w-full flex-col justify-around px-2 lg:flex-col"
>
	<FeedingProgress />
	<MealClock />
	<FeedNotifier />
</div>
