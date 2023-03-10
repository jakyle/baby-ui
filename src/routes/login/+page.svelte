<script lang="ts">
	import CardContainer from '$lib/CardContainer.svelte';
	import { Amplify, Auth } from 'aws-amplify';
	import awsconfig from '../../aws-exports';
	Amplify.configure(awsconfig);

	let email: string;
	let password: string;
	let newPassword: string;
	let user: any;
	let flow: 'login' | 'reset' = 'login';


	async function resetPassword() {
		try {
			const userResponse = await Auth.completeNewPassword(
				user, // the Cognito User Object
				newPassword, // the new password
				// OPTIONAL, the required attributes
			);

			console.log(userResponse);
		} catch (error) {
			console.log('error signing in', error);
		}
	}

	async function signIn() {
		try {
			const userResponse = await Auth.signIn(email, password);
			console.log(userResponse);
			if (userResponse.challengeName === 'NEW_PASSWORD_REQUIRED') {
				const { requiredAttributes } = userResponse.challengeParam;
				console.log(requiredAttributes);
				flow = 'reset';
			}
			user = userResponse;
		} catch (error) {
			console.log('error signing in', error);
		}
	}

	const submitHandler = async () => {
		if (flow === 'login') {
			await signIn();
		}

		else if (flow === 'reset') {
			await resetPassword();
		}
	};
</script>

<div class="flex h-full w-full items-center justify-center">
	<CardContainer>
		<form
			on:submit|preventDefault={async () => await submitHandler()}
			class="flex flex-col items-center justify-center gap-4"
		>
			{#if flow === 'login'}
				<p class="text-2xl">LOGIN</p>
				<div class="form-control w-full">
					<label for="email" class="label">
						<span class="label-text">Email</span>
					</label>
					<label class="input-group">
						<span>Email</span>
						<input type="text" class="input input-bordered w-full" bind:value={email} />
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
			{:else if flow === 'reset'}
				<p class="text-2xl">RESET PASSWORD</p>
				<div class="form-control w-full">
					<label for="newPassword" class="label">
						<span class="label-text">New Password</span>
					</label>
					<label class="input-group">
						<span>New Password</span>
						<input type="password" class="input input-bordered w-full" bind:value={newPassword} />
					</label>
				</div>
			{/if}

			<button type="submit" class="btn w-full">LOGIN</button>
		</form>
	</CardContainer>
</div>
