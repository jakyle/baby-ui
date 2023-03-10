<script lang="ts">
	import { classes } from '../util/html-helpers';
	import BabyLetter from './BabyLetter.svelte';
	export let sentence: string;
	export let gap: string = '4';
	$: gapValue = `gap-${gap}`;

	$: parentClasses = classes(
		gapValue,
		'flex',
		'justify-center',
		'w-auto',
		'flex-wrap',
		'child:flex',
		'child:w-fit',
		'child:justify-center',
		'child:transition-filter-transform',
		'child:duration-300',
		'child-hover:scale-150',
		'child-hover:relative',
		'child-hover:z-10',
	);

</script>

<div class="grand-child-hover-siblings:blur-2xs flex flex-col {gapValue}">
	{#each sentence.split(' ') as word}
	<div tabindex="-1" class={parentClasses}>
		{#each word.split('') as letter }
		<div tabindex="-1" class="odd:uppercase">
			<BabyLetter  animation="wiggle" {letter} />
		</div>
		{/each}
	</div>
	{/each}
</div>

