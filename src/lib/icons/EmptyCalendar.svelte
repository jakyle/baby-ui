<script lang="ts">
	import { classes } from '../../util/html-helpers';
	import { setPathAnimation } from '../../util/use-svg-draw';

	export let className = classes(
		'h-12',
		'w-12',
		'stroke-base-content',
		'stroke-[1.5]',
		'2xs:h-14',
		'2xs:w-14',
		'xs:h-16',
		'xs:w-16',
		'sm:h-20',
		'sm:w-20'
	);
	export { className as class };
	export let viewBox = '0 0 24 24';
</script>

<svg xmlns="http://www.w3.org/2000/svg" fill="none" class={className} {viewBox}>
	<path
		use:setPathAnimation
		class="animate-draw-path"
		stroke-linecap="round"
		stroke-linejoin="round"
		d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
	/>
</svg>
