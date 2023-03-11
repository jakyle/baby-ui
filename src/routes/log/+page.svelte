<script lang="ts">
	import { feedingStore } from "$lib/stores/feeding-store";
</script>

<div class="h-[92vh] w-full scroll-p-48 overflow-y-scroll landscape:h-[83vh] lg:landscape:h-[92vh]">
	<ul class="flex w-full flex-col gap-2 md:flex-row md:justify-around md:flex-wrap p-2">
		{#each $feedingStore as feeding}
			<li class="grid w-full md:w-1/3 rounded bg-base-100 py-5 px-6">
				<p class="col-start-1 row-start-1 font-extrabold uppercase">Fed Time:</p>
				<p class="col-start-2 row-start-1">{new Date(feeding.dateTime).toLocaleString()}</p>

				<p class="col-start-1 row-start-2 font-extrabold uppercase">By:</p>
				<p class="col-start-2 row-start-2">{feeding.by}</p>

				<p class="col-start-1 row-start-3 font-extrabold uppercase">Oz:</p>
				<p class="col-start-2 row-start-3">{feeding.oz}</p>
			</li>
		{/each}
	</ul>
</div>
