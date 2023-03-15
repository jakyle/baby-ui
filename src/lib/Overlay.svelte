<script lang="ts">
	import { classes } from '../util/html-helpers';
	import Loading from './Loading.svelte';
	import Notifications from './Notifications.svelte';
	import NotifierFactory from './NotifierFactory.svelte';
	import { shouldOverlay } from './stores/overlay-store';
	

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
		'duration-50',
		...($shouldOverlay ? ['bg-neutral-900/90'] : ['bg-transparent'])
	);
</script>

<div class={overlayClasses}>
	<Notifications />
	<Loading />
	<NotifierFactory />
</div>
