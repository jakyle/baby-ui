<script lang="ts">
	import { currentNotifier } from './stores/notifier-store';
	import Icon from './icons/Icon.svelte';

	const toggleNotifier = (notifier: string) => {
		currentNotifier.set(notifier);
	};
</script>

<div class="flex w-full flex-row justify-around gap-2 transition-all">
	<button
		class="btn-circle btn h-20 w-20 text-xl hover:scale-105"
		on:click={() => toggleNotifier('feeding')}
	>
		<Icon icon="bottle" />
	</button>

	<!-- <button class="btn-circle btn text-xl w-20 h-20 hover:scale-105">
		<Icon icon='diaper' />
	</button> -->
</div>
