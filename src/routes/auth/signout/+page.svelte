<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { logout, userNameStore } from '$lib/stores/user-store';

	async function submitHandler() {
		await logout();
	}

</script>

<form
	on:submit|preventDefault={async () => await submitHandler()}
	class="flex flex-col items-center justify-center gap-4"
>
	<p>Signed in as <span class="text-bold">{$userNameStore ?? ''}</span></p>

	<button type="submit" class="btn w-full">LOGOUT</button>
	<button type="button" on:click={() => goto(`${$page.url.origin}/`)} class="btn btn-success w-full">HOME</button>
</form>
