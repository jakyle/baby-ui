<script lang="ts">
	import CardContainer from '$lib/CardContainer.svelte';
	import { Amplify, Auth } from 'aws-amplify';
	import awsconfig from '../../aws-exports';
	Amplify.configure(awsconfig);

	let username: string;
	let password: string;

	async function signIn() {
		try {
			return await Auth.signIn(username, password);
		} catch (error) {
			console.log('error signing in', error);
		}
	}

	const submitHandler = async () => {
		const user = await signIn();
		console.log(user);
	}

</script>

<div class="flex h-full w-full items-center justify-center">
	<CardContainer>
		<form on:submit|preventDefault={async () => await submitHandler()} class="flex flex-col items-center justify-center gap-4">
			<div class="form-control w-full">
				<label for="username" class="label">
					<span class="label-text">Username</span>
				</label>
				<label class="input-group">
					<span>Username</span>
					<input type="text" class="input input-bordered w-full" bind:value={username} />
				</label>
			</div>

			<div class="form-control w-full">
				<label for="password" class="label">
					<span class="label-text">Password</span>
				</label>
				<label class="input-group">
					<span>Password</span>
					<input type="password" class="input input-bordered w-full" bind:value={password} />
				</label>
			</div>

			<button type="submit" class="btn w-full">LOGIN</button>
		</form>
	</CardContainer>
</div>
