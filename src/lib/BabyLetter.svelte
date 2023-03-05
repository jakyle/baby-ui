<script lang="ts">
	import { onMount } from 'svelte';
	import { classes } from '../util/html-helpers';

	export let letter: string;

	const colors = [
		'fuchsia',
		'yellow',
		'teal',
		'blue',
		'rose',
		'lime',
		'pink',
		'cyan'
	];

	const rotations = ['-rotate-6', '-rotate-12', 'rotate-6', 'rotate-12'];

	const getTextColor = (prev: string) => {
		const filteredColors = colors.filter(c => c !== prev);
		const index = Math.floor(Math.random() * filteredColors.length);
		return `text-${filteredColors[index]}-200`;
	};

	const getTextRotation = (prev: string) => {
		const filteredRotation = rotations.filter(r => r !== prev);
		const index = Math.floor(Math.random() * filteredRotation.length);
		return rotations[index];
	};

	const getLetter = (letter: string) => {
		const color = getTextColor(babyLetter?.color.split('-')[1] ?? '');
		const rotation = getTextRotation(babyLetter?.rotation ?? '');
		return {
			letter,
			color,
			rotation
		}
	};

	$: babyLetter = getLetter(letter);

	const LETTER_CHANGE_TIMER = 700;
	onMount(() => {
		let interval = setInterval(() => {
			babyLetter = getLetter(letter);
		}, LETTER_CHANGE_TIMER);

		return () => clearInterval(interval);
	});

	$: letterClasses = classes(
		babyLetter.color,
		babyLetter.rotation,
		'flex',
		'justify-center',
		'transform-transform-colors',
		'duration-700',
		'w-fit'
	);
</script>

<span class={letterClasses}>{babyLetter.letter}</span>
