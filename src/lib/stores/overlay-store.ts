import { derived, writable } from 'svelte/store';
import { feedingProgress } from './feeding-store';
import { loadingStore } from './loading-store';
import { currentNotifier } from './notifier-store';

export const showSideDrawer = writable(false);

export const shouldOverlay = derived(
	[feedingProgress, loadingStore, currentNotifier, showSideDrawer],
	([$feeding, $loading, $currentNotifier, $showSideDrawer]) =>
		$feeding
		|| $loading
		|| $showSideDrawer
		|| $currentNotifier !== null
);