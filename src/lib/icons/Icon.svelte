<script lang="ts">
	import type { ComponentType } from "svelte";
	import Bottle from "./Bottle.svelte";
	import Calendar from "./Calendar.svelte";
	import Cancel from "./Cancel.svelte";
	import Clock from "./Clock.svelte";
	import Diaper from "./Diaper.svelte";
	import EmptyCalendar from "./EmptyCalendar.svelte";
	import Menu from "./Menu.svelte";

	type IconType = 
		| 'menu'
		| 'bottle'
		| 'diaper'
		| 'clock'
		| 'calendar'
		| 'cancel'
		| 'empty-calendar';

	const iconMap: Record<IconType, ComponentType> = {
		bottle: Bottle,
		diaper: Diaper,
		clock: Clock,
		calendar: Calendar,
		cancel: Cancel,
		menu: Menu,
		['empty-calendar']: EmptyCalendar
	};

	export let icon: IconType;
	export let className: string | undefined = undefined;
	export { className as class };
	export let viewBox: string | undefined = undefined;

</script>

<svelte:component this={iconMap[icon]} class={className} {viewBox} />