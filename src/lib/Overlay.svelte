<script lang="ts">
	import { classes } from '../util/html-helpers';
	import { feedingProgress } from './stores/feeding-store';
	import Notifications from './Notifications.svelte';

	$: overlayClasses = classes(
		'pointer-events-none',
		'fixed',
		'top-0',
		'left-0',
		'z-10',
		'flex',
		'h-screen',
		'w-screen',
		'flex-col',
		'items-center',
		'gap-1',
		'transition-colors',
		'ease-in-back',
		...($feedingProgress
			? ['bg-neutral-900/90', 'duration-2000']
			: ['bg-transparent', 'duration-50'])
	);
</script>

<div class={overlayClasses}>
	<Notifications />
</div>
