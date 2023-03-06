<script lang="ts">
	import { feedingStore } from '$lib/stores/feeding-store';
	let sup = 'sup';
</script>

{#await $feedingStore then feedings}
	<ul class="flex flex-col gap-2 p-2 w-full">
		{#each feedings as feeding}
			<li class="bg-base-100 grid py-5 px-6 rounded w-full">
				<p class="uppercase row-start-1 col-start-1 font-extrabold">Fed Time:</p>
				<p class="row-start-1 col-start-2">{new Date(feeding.dateTime).toLocaleString()}</p>

				<p class="uppercase row-start-2 col-start-1 font-extrabold">By:</p>
				<p class="row-start-2 col-start-2">{feeding.by}</p>
			</li>
		{/each}
	</ul>
{/await}
