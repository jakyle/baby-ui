<script lang="ts">
	import '../app.css';
	import Overlay from '../lib/Overlay.svelte';
	// import { goto } from '$app/navigation';

	// goto("/feed-tracker");
</script>

<div class="relative flex flex-col h-screen w-screen bg-primary">
	<nav class="sticky bg-neutral navbar flex-none">
		<div class="navbar-start flex gap-4 ml-4">
			<a class="link uppercase" href="/">home</a>
			<a class="link uppercase" href="/feed-tracker">feeding</a>
			<a class="link uppercase" href="/log">log</a>
		</div>
	</nav>
	<div class="flex-1">
		<Overlay />
		<slot />
	</div>
</div>
