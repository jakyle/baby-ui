import { writable } from 'svelte/store';


export const loadingStore = writable(false);

export const isLoading = (value: boolean) => {
	loadingStore.set(value);
}