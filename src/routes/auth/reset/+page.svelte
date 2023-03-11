<script lang="ts">
	import { resetPassword, userStore } from '$lib/stores/user-store';

	let newPassword: string;
	async function submitHandler() {
		await resetPassword($userStore, newPassword);
	}
</script>

<form
	on:submit|preventDefault={async () => await submitHandler()}
	class="flex flex-col items-center justify-center gap-4"
>
	<p class="text-2xl">RESET PASSWORD</p>
	<div class="form-control w-full">
		<label class="input-group">
			<span>New Password</span>
			<input type="password" class="input-bordered input w-full" bind:value={newPassword} />
		</label>
	</div>

	<button type="submit" class="btn w-full">RESET</button>
</form>
