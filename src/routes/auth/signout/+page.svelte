<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { logout, userNameStore } from '$lib/stores/user-store';

	async function submitHandler() {
		await logout();
	}
</script>

<div class="card-bordered card bg-base-100 md:max-w-sm lg:w-auto">
	<div class="card-body w-full p-4">
		<form
			on:submit|preventDefault={async () => await submitHandler()}
			class="flex flex-col items-center justify-center gap-4"
		>
			<p>Signed in as <span class="text-bold">{$userNameStore ?? ''}</span></p>

			<button type="submit" class="btn w-full">LOGOUT</button>
			<button
				type="button"
				on:click={() => goto(`${$page.url.origin}/`)}
				class="btn-success btn w-full">HOME</button
			>
		</form>
	</div>
</div>
