<script lang="ts">
	import CardContainer from '$lib/CardContainer.svelte';
	import Icon from '$lib/icons/Icon.svelte';
	import { sendFeeding } from '$lib/stores/feeding-store';
	import { isNotifierSendProgress } from '$lib/stores/notifier-store';
	import { userNameStore } from '$lib/stores/user-store';
	import { fly, scale } from 'svelte/transition';
	import { classes } from '../../util/html-helpers';
	import TimeoutButton from './TimeoutButton.svelte';

	const dateObj = new Date();
	let date = dateObj.toLocaleDateString('sv');
	let time = dateObj.toLocaleTimeString('sv');
	let oz = 4;

	$: ounces = `${oz} OZ`;

	const handleNotify = () => {
		handleEndNotify();
		sendFeeding(date, time, oz, $userNameStore);
	};

	const handleStartTimer = () => ($isNotifierSendProgress = true);

	const handleEndNotify = () => ($isNotifierSendProgress = false);

	$: buttonText = $isNotifierSendProgress ? 'FEEDING...' : 'FED';

	const buttonClasses = classes(
		'btn-xl',
		'transition-color',
		'btn',
		'h-24',
		'w-full',
		'sm:w-48',
		'flex-col',
		'gap-1',
		'bg-base-300',
		'text-lg',
		'text-base-content',
		'ease-in-back',
		'2xs:text-xl',
		'xs:text-2xl',
		'sm:h-full',
		'sm:basis-1/3',
		'sm:text-3xl'
	);

	const duration = 600;
	const flyX = 200;
</script>

<CardContainer>
	<div class="flex w-full flex-col justify-between gap-2 sm:flex-row-reverse lg:flex-col-reverse">
		<TimeoutButton
			on:finishTimer={handleNotify}
			on:startTimer={handleStartTimer}
			on:stopTimer={handleEndNotify}
		>
			{#await $isNotifierSendProgress then isSendingProgress}
				<div
					in:scale={{ duration }}
					class={buttonClasses}
					class:duration-100={!isSendingProgress}
					class:duration-2000={isSendingProgress}
					class:btn-info={isSendingProgress}
				>
					<span>{buttonText}</span>
					<div class="flex">
						<span class:hidden={!isSendingProgress} class="animate-spin-slow"> 🍼 </span>
						<span class:animate-pulse={isSendingProgress}>🧑‍🍼</span>
						<span class:hidden={!isSendingProgress} class="animate-reverse-spin-slow">🍼</span>
					</div>
				</div>
			{/await}
		</TimeoutButton>
		<div class="grid gap-2 sm:basis-2/3 lg:flex-nowrap lg:justify-around lg:gap-0">
			<div in:fly={{ x: flyX, duration }} class="form-control  row-start-1  text-xl lg:w-64">
				<label class="input-group sm:input-group-sm">
					<span>
						<Icon icon="calendar" />
					</span>
					<input type="date" class="input-bordered input w-full" bind:value={date} />
				</label>
			</div>

			<div
				in:fly={{ x: -flyX, duration }}
				class="form-control row-start-2 text-xl sm:input-group-sm lg:w-64"
			>
				<label class="input-group">
					<span><Icon icon="clock" /></span>
					<input
						type="time"
						class="input-bordered input w-full appearance-none"
						bind:value={time}
					/>
				</label>
			</div>

			<label in:fly={{ x: flyX, duration: duration }} class="input-group row-start-3 lg:w-64">
				<input type="range" min="1" max="12" class="range range-lg" bind:value={oz} />
				<span class="w-28 lg:h-8">{ounces}</span>
			</label>
		</div>
	</div>
</CardContainer>
