import { derived } from 'svelte/store';
import { feedingProgress } from './feeding-store';
import { loadingStore } from './loading-store';
import { currentNotifier } from './notifier-store';

export const shouldOverlay =  derived(
	[feedingProgress, loadingStore, currentNotifier ], 
	([$feeding, $loading, $currentNotifier]) => $feeding || $loading || $currentNotifier !== null);