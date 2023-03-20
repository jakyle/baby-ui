<script lang="ts">
	import BabyLetter from '$lib/BabyLetter.svelte';
	import FocusLetterSentences from '$lib/FocusLetterSentences.svelte';
	import NotifierMenu from '$lib/NotifierMenu.svelte';
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

<div class="flex h-full w-full flex-col items-center justify-around">
	<div
		class="flex w-full flex-col gap-4 bg-base-100 p-8 font-baby-block text-xl shadow 2xs:text-2xl xs:text-3xl sm:w-fit sm:rounded-lg sm:px-24"
	>
		<FocusLetterSentences {sentence} />
		<div class="flex justify-center pb-2 text-8xl contrast-125 sm:text-6xl">
			<BabyLetter animation="bounce-spring" letter={baby} />
		</div>
	</div>

	<NotifierMenu />
</div>
