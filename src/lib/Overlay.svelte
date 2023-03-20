<script lang="ts">
	import { classes } from '../util/html-helpers';
	import FeedingProgress from './NotifierProgress.svelte';
	import Loading from './Loading.svelte';
	import Notifications from './Notifications.svelte';
	import NotifierFactory from './NotifierFactory.svelte';
	import { shouldOverlay } from './stores/overlay-store';
	import SideDrawer from './SideDrawer.svelte';
	

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
	<SideDrawer />
	<Notifications />
	<Loading />
	<FeedingProgress />
	<NotifierFactory />
</div>
