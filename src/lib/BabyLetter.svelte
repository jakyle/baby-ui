<script lang="ts">
	import { onMount } from 'svelte';
	import { getRandomElement } from '../util/array-helpers';
	import { classes } from '../util/html-helpers';
	import { intervalMount } from '../util/svelte-helpers';

	type ColorName = 'fuchsia' | 'yellow' | 'teal' | 'blue' | 'rose' | 'lime' | 'pink' | 'cyan';
	type TextColor = `text-${ColorName}-200`;
	type Animation = 'bounce-spring' | 'wiggle';

	type LetterMeta = {
		letter: string;
		color: TextColor;
	};

	const animateMap = {
		wiggle: 'animate-wiggle',
		'bounce-spring': 'animate-bounce-spring'
	};

	export let letter: string;
	export let animation: Animation = 'bounce-spring';

	const colors: Array<ColorName> = [
		'fuchsia',
		'yellow',
		'teal',
		'blue',
		'rose',
		'lime',
		'pink',
		'cyan'
	];

	const getTextColor = (prev: string): TextColor =>
		`text-${getRandomElement(colors.filter((c) => c !== prev))}-200`;

	const getLetter = (letter: string): LetterMeta => ({
		letter,
		color: getTextColor(babyLetter?.color.split('-')[1] ?? '')
	});

	$: babyLetter = getLetter(letter);

	const LETTER_CHANGE_TIMER = 700;

	onMount(() => intervalMount(() => (babyLetter = getLetter(letter)), LETTER_CHANGE_TIMER));

	$: letterClasses = classes(
		babyLetter.color,
		'flex',
		'justify-center',
		'transform-transform-colors',
		'duration-700',
		'w-fit',
		animateMap[animation]
	);
</script>

<span class={letterClasses}>{babyLetter.letter}</span>
