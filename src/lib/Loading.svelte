<script lang="ts">
	import { loadingStore } from './stores/loading-store';
</script>

{#if $loadingStore}
	<div class="flex w-full h-full justify-center items-center">

		<div class="w-48 h-48 flex relative flex justify-center items-center">
			<svg class="absolute animate-spin" viewBox="0 0 24 24">
				<circle class="fill-none stroke-gray-100/10 stroke-[3]" r="10" cx="50%" cy="50%" />
				<circle
					class="fill-none stroke-primary stroke-[3] transition-all duration-500 stroke-dasharray-[63] stroke-dashoffset-[50]"
					r="10"
					cx="50%"
					cy="50%"
				></circle>
			</svg>
			<p class="animate-pulse text-lg">LOADING...</p>
		</div>

	</div>
{/if}
