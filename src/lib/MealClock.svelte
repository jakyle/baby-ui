<script lang="ts">
  import { feedingProgress, currentFeedingModel, feedingCountDown } from '../store/feeding-store';
</script>

{#await $currentFeedingModel}
  <p class="text-primary">getting the data</p>
{:then { time, date, nextFeeding, oz, fedBy }}
  <div
    class="flex w-full flex-col transition-opacity sm:h-full"
    class:opacity-20={$feedingProgress}
  >
    <div class="stats stats-vertical shadow sm:h-full">

      <div class="stat">
        <div class="stat-title">Last Fed</div>
        <div class="stat-value">{time}</div>
        <div class="stat-desc text-base">{date}</div>
      </div>

      <div class="stat">
        <div class="stat-title">Next Feeding at...</div>
        <div class="stat-value text-2xl">{nextFeeding}</div>
        <div class="stat-desc text-lg">{$feedingCountDown}</div>
      </div>

      <div class="stat">
        <div class="stat-title">Fed</div>
        <div class="stat-value">{oz} OZ</div>
        <div class="stat-desc text-base">By: {fedBy}</div>
      </div>

    </div>
  </div>
{:catch error}
  <p class="text-error">no data {error.toString()}</p>
{/await}
