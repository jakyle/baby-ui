<script lang="ts">
	import type { FeedingItem } from '../../api/feeding.model';
	export let data: { feedingItems: Array<FeedingItem> };
</script>

<div class="w-full overflow-y-scroll scroll-p-48 h-[92vh] landscape:h-[83vh] lg:landscape:h-[92vh]">
	<ul class="flex w-full flex-col gap-2 p-2">
		{#each data.feedingItems as feeding}
			<li class="grid w-full rounded bg-base-100 py-5 px-6">
				<p class="col-start-1 row-start-1 font-extrabold uppercase">Fed Time:</p>
				<p class="col-start-2 row-start-1">{new Date(feeding.dateTime).toLocaleString()}</p>
	
				<p class="col-start-1 row-start-2 font-extrabold uppercase">By:</p>
				<p class="col-start-2 row-start-2">{feeding.by}</p>
			</li>
		{/each}
	</ul>
</div>
