<script lang="ts">
	import { classes } from '../util/html-helpers';
	import BabyLetter from './BabyLetter.svelte';
	export let word: string;
	export let gap: string = '4';

	$: gapValue = `gap-${gap}`;

	const containerClasses = classes(
		'odd:uppercase',
		'group-hover:blur-2xs',
		'group-focus-within:blur-2xs',
		'group-active:blur-2xs',
		'flex',
		'w-fit',
		'justify-center',
		'transition-filter-transform',
		'duration-300',
		'focus:scale-150',
		'active:scale-150',
		'hover:scale-150',
		'focus:relative',
		'focus:z-10',
		'active:relative',
		'active:z-10',
		'hover:relative',
		'hover:z-10',
		'hover:!blur-0',
		'focus:!blur-0',
		'active:!blur-0'
	);

</script>

<div tabindex="-1" class="{gapValue} flex justify-center w-auto group flex-wrap">
	{#each word.split('') as letter }
	<div tabindex="-1" class={containerClasses}>
		<BabyLetter  {letter} />
	</div>
	{/each}
</div>
