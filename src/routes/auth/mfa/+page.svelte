<script lang="ts">
	import { confirmSignIn, userStore } from '$lib/stores/user-store';

	let challengeCode: string;
	async function submitHandler() {
		await confirmSignIn($userStore, challengeCode);
	}
</script>

<form
	on:submit|preventDefault={async () => await submitHandler()}
	class="flex flex-col items-center justify-center gap-4"
>
	<p>Enter your auth code.</p>
	<div class="form-control w-full">
		<label class="input-group">
			<span>CODE</span>
			<input type="input" class="input-bordered input w-full" bind:value={challengeCode} />
		</label>
	</div>

	<button type="submit" class="btn w-full">CODE</button>
</form>