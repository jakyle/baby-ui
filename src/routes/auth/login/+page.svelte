<script lang="ts">
	import { signIn } from '$lib/stores/user-store';

	let email: string;
	let password: string;

	async function submitHandler() {
		await signIn(email, password);
	}
</script>

<form
	on:submit|preventDefault={async () => await submitHandler()}
	class="flex flex-col items-center justify-center gap-4"
>
	<p class="text-2xl">LOGIN</p>
	<div class="form-control w-full">
		<label class="input-group">
			<span>Email</span>
			<input type="text" class="input-bordered input w-full" bind:value={email} />
		</label>
	</div>

	<div class="form-control w-full">
		<label class="input-group">
			<span>Password</span>
			<input type="password" class="input-bordered input w-full" bind:value={password} />
		</label>
	</div>

	<button type="submit" class="btn w-full">LOGIN</button>
</form>
