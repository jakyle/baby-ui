<script lang="ts">
	import { classes } from '../../util/html-helpers';
	import { setPathAnimation } from '../../util/use-svg-draw';

	export let className = classes('h-6', 'w-6', 'stroke-base-content', 'stroke-[1.5]');
	export { className as class };
	export let viewBox = '0 0 24 24';
</script>

<svg class={className} xmlns="http://www.w3.org/2000/svg" fill="none" {viewBox} stroke-width="1.5">
	<path
		use:setPathAnimation
		class="animate-draw-path"
		stroke-linecap="round"
		stroke-linejoin="round"
		d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
	/>
</svg>
