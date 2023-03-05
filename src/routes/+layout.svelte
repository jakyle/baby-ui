<script lang="ts">
	import '../app.css';
	import Overlay from '../lib/Overlay.svelte';
	// import { goto } from '$app/navigation';

	// goto("/feed-tracker");
</script>

<div class="relative h-screen w-screen">
	<Overlay />
	<slot />
</div>