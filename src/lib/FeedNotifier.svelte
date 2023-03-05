<script lang="ts">
  import { fade } from "svelte/transition";
  import { feedingProgress, sendFeeding } from "../store/feeding-store";
	import CardContainer from "./CardContainer.svelte";

  const dateObj = new Date();
	let date = dateObj.toLocaleDateString("sv");
	let time = dateObj.toLocaleTimeString("sv");
	let oz = 4;
  
  let submitButton: HTMLButtonElement | null = null;

	$: ounces = `${oz} OZ`;
  const SECONDS = 2;
  const sendTimer = SECONDS * 1000;
  let timeout: NodeJS.Timeout | null = null;

  const handleStartTimer = () => {
    if (!$feedingProgress) {
      feedingProgress.update(() => true);
      timeout = setTimeout(() => {
        if ($feedingProgress) {
          $feedingProgress = false;
          sendFeeding(date, time, oz, "Jimmy");
        }
      }, sendTimer);
    }
  }

  const touchMoveHandler = (event: TouchEvent) => {
    if (!$feedingProgress) {
      return;
    }

    const {top, bottom, left, right} = submitButton!.getBoundingClientRect();
    const isTouching = Array.from(event.touches).some(({clientX, clientY}) => 
        clientY >= top
      && clientY <= bottom
      && clientX >= left
      && clientX <= right
    );

    if (!isTouching) {
      $feedingProgress = false;
    }
  }

  const handleStopTimer = () => {
    $feedingProgress = false;
    if (timeout) clearTimeout(timeout);
  }

  $: buttonText = $feedingProgress ? 'FEEDING...' :  'FED';
</script>

<CardContainer>
  <div class="flex w-full flex-col justify-between gap-2 md:flex-col-reverse">
    {#await $feedingProgress then isFeeding}
      <button
        on:mouseleave={handleStopTimer}
        on:touchcancel={handleStopTimer}
        on:touchend={handleStopTimer}
        on:mouseup={handleStopTimer}
        on:touchmove={touchMoveHandler}
        on:touchstart={handleStartTimer}
        on:mousedown={handleStartTimer}
        on:contextmenu|preventDefault
        bind:this={submitButton}
        class="btn-xl transition-color btn h-32 flex-col gap-3 text-3xl ease-in-back"
        class:duration-100={!isFeeding}
        class:duration-2000={isFeeding}
        class:btn-info={isFeeding}
      >
        <span>{buttonText}</span>
        <div class="flex">
          {#if isFeeding}
            <span transition:fade={{ duration: 100 }} class="animate-spin-slow"
              >🍼</span
            >
          {/if}
          <span class:animate-pulse={isFeeding}>🧑‍🍼</span>
          {#if isFeeding}
            <span
              transition:fade={{ duration: 100 }}
              class="animate-reverse-spin-slow">🍼</span
            >
          {/if}
        </div>
      </button>
    {/await}
    <div
      class="flex w-full flex-col gap-4 sm:flex-row sm:flex-wrap sm:justify-between lg:flex-nowrap lg:justify-around lg:gap-0"
    >
      <input
        type="date"
        class="input-bordered input input-lg w-full text-2xl lg:w-64"
        bind:value={date}
      />

      <input
        type="time"
        class="input-bordered input input-lg w-full text-2xl lg:w-64"
        bind:value={time}
      />

      <label class="input-group-lg input-group lg:w-64">
        <input
          type="range"
          min="1"
          max="12"
          class="range range-lg"
          bind:value={oz}
        />
        <span class="w-28 lg:h-8">{ounces}</span>
      </label>
      <div />
      <!-- TODO: Create custom date time picker -->
    </div>
  </div>
</CardContainer>
