import { writable } from "svelte/store";

export const currentNotifier = writable<string | null>(null);
export const isNotifierSendProgress = writable<boolean>(false);