<script lang="ts">
	import { isNotifierSendProgress } from './stores/notifier-store';
</script>

{#await $isNotifierSendProgress then isFeeding}
	<div
		class="absolute top-2/5 right-0 h-36 w-full bg-neutral-800/80 py-1 sm:top-0"
		class:opacity-0={!isFeeding}
		class:-z-10={!isFeeding}
		class:z-20={isFeeding}
		class:opacity-100={isFeeding}
	>
		<div
			class="h-full rounded-r-lg bg-info transition-width"
			class:w-0={!isFeeding}
			class:duration-0={!isFeeding}
			class:duration-2000={isFeeding}
			class:w-full={isFeeding}
		/>
	</div>
{/await}
