import { derived } from 'svelte/store';
import { feedingProgress } from './feeding-store';
import { loadingStore } from './loading-store';

export const shouldOverlay =  derived([feedingProgress, loadingStore], ([$feeding, $loading]) => $feeding || $loading);