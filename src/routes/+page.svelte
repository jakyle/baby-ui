<script lang="ts">
	import BabyLetter from '$lib/BabyLetter.svelte';
	import FocusLetterSentences from '$lib/FocusLetterSentences.svelte';
	import { onMount } from 'svelte';
	import { getRandomElement } from '../util/array-helpers';
	import { intervalMount } from '../util/svelte-helpers';
	const sentence = 'Baby Tracker';
	const babies = ['👶🏻', '👶🏼', '👶🏽', '👶🏾', '👶🏿'];
	const BABY_TIMER = 1000;
	$: baby = babies[0];

	onMount(() =>
		intervalMount(
			() => (baby = getRandomElement(babies.filter((b) => b !== baby ?? ''))),
			BABY_TIMER
		)
	);
</script>

<div class="h-full w-full flex items-center justify-center">
	<div
		class="flex font-baby-block text-3xl flex-col w-full sm:w-fit p-8 sm:px-24 sm:rounded-lg shadow bg-base-100 gap-4">

			<FocusLetterSentences gap="2" {sentence} />
		<div class="flex contrast-125 justify-center text-8xl sm:text-6xl">
			<BabyLetter animation="bounce-spring" letter={baby} />
		</div>

		<div class="flex justify-center pt-12 relative">
			<a class="absolute top-10 font-baby text-2xl font-base btn btn-xl" href="./feed-tracker">
				Feed
			</a>
		</div>
	</div>
</div>
