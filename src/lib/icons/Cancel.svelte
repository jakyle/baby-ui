<script lang="ts">
	import { classes } from '../../util/html-helpers';
	import { setPathAnimation } from '../../util/use-svg-draw';

	export let className = classes('h-7', 'w-7');
	export { className as class };
	export let viewBox = '0 0 24 24';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	{viewBox}
	stroke-width="1.5"
	stroke="currentColor"
	class={className}
>
<path 
	use:setPathAnimation
	class="animate-draw-path"
	stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>
