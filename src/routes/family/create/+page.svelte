<script lang="ts">
	import { goto } from '$app/navigation';
	import { caregiverStore } from '$lib/stores/caregiver-store';
	import type { CareGiver } from '../../../API';

	const hasPendingFamilyInvite = (caregiver: CareGiver): boolean =>
		caregiver.pendingInvites !== undefined &&
		caregiver.pendingInvites !== null &&
		caregiver.pendingInvites.length > 0;

	const hasFamily = (caregiver: CareGiver): boolean =>
		caregiver.family !== undefined && caregiver.family !== null;

	const invites = (caregiver: CareGiver): string[] =>
		(caregiver.pendingInvites ?? [])
			.filter((invite) => typeof invite === 'string')
			.map((invite) => invite as string);

	const createFamily = () => {
		goto('/family/create');
	}

	const editFamily = () => {
		goto('/family/edit');
	}
</script>

<main class="flex h-full w-full items-center justify-center">
	{#await $caregiverStore then caregiver}
		<div
			class="container flex flex-grow flex-col items-center gap-6 rounded bg-base-100 px-4 py-6 shadow"
		>
			{#if caregiver === null}
				<p class="text-lg text-error">NO USER, das not good, this shouldn't be a thing 😔</p>
			{:else}
				{#if hasFamily(caregiver)}
					<button on:click={editFamily} class="btn">EDIT {caregiver.family?.name} FAMILY!</button>
				{:else}
					<button on:click={createFamily} class="btn"> START FAMILY! </button>
				{/if}

				{#if hasPendingFamilyInvite(caregiver)}
					<ul>
						{#each invites(caregiver) as invite}
							<li class="flex w-full justify-between text-lg">
								<span class="text-info">{invite} FAMILY</span>
								<button class="btn">Join!</button>
							</li>
						{/each}
					</ul>
				{:else}
					<div class="flex flex-col items-center gap-4">
						<p class="text-xl font-semibold text-info">No pending invites</p>
						<small class="text-sm text-base-content">(invites will appear here)</small>
					</div>
				{/if}
			{/if}
		</div>
	{/await}
</main>
