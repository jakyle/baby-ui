<script lang="ts">
	import BabyLetter from '$lib/BabyLetter.svelte';
	import FocusLetterWord from '$lib/FocusLetterWord.svelte';
	import { onMount } from 'svelte';
	const sentence = "Baby Tracker";
	const babies = ['👶🏻', '👶🏼', '👶🏽', '👶🏾', '👶🏿']
	const BABY_TIMER = 1000;

	let baby = babies[0];

	onMount(() => {
		const interval = setInterval(() => {
			const prev = baby ?? '';
			const filteredBabies = babies.filter(b => b !== prev);
			baby = filteredBabies[Math.floor(Math.random() * filteredBabies.length)];
		}, BABY_TIMER)

		return () => clearInterval(interval);
	})

</script>

<div class="bg-slate-400 h-screen w-screen flex items-center justify-center">
	<div class="flex font-baby-block text-sm flex-col w-fit p-8 sm:p-24 rounded-lg sm:rounded-full shadow bg-slate-700 gap-4">
		{#each sentence.split(' ') as word}
			<FocusLetterWord gap="2" {word} />
		{/each}
		<div class="flex contrast-125 justify-center text-8xl">
			<BabyLetter letter={baby} />
		</div>
	</div>
</div>
