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

	const getTextColor = () => {
		const index = Math.floor(Math.random() * colors.length);
		return `text-${colors[index]}-200`;
	};

	const getTextRotation = () => {
		const index = Math.floor(Math.random() * rotations.length);
		return rotations[index];
	};

	const getLetter = (letter: string) => ({
		letter,
		color: getTextColor(),
		rotation: getTextRotation(),
	});

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
