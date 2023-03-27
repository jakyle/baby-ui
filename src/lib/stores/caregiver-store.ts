import { writable } from "svelte/store";
import type { CareGiver } from "../../API";

export const caregiverStore = writable<CareGiver | null>(null);