<script lang="ts">
	import { classes } from '../../util/html-helpers';
	import { setPathAnimation } from '../../util/use-svg-draw';

	export let className = classes('h-6', 'w-6', 'stroke-base-content');
	export { className as class };
	export let viewBox = '0 0 24 24';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	{viewBox}
	stroke-width="1.5"
	class={className}
>
	<path
		use:setPathAnimation
		class="animate-draw-path"
		stroke-linecap="round"
		stroke-linejoin="round"
		d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
	/>
</svg>
