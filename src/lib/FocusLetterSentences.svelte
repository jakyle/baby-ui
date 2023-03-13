<script lang="ts">
	import { classes } from '../util/html-helpers';
	import BabyLetter from './BabyLetter.svelte';
	export let sentence: string;

	$: parentClasses = classes(
		'lg:gap-4',
		'xs:gap-2',
		'gap-1',
		'flex',
		'justify-center',
		'w-auto',
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

<div class="grand-child-hover-siblings:blur-2xs flex flex-col lg:gap-4 xs:gap-2 gap-1">
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

