<script lang="ts">
	import { isLoading } from '$lib/stores/loading-store';
	import { resetPassword, userStore } from '$lib/stores/user-store';

	let errorType: string | undefined;

	const errorMap: Record<string, string> = {
		NotAuthorizedException: 'Invalid password or session timed out',
		UserNotFoundException: 'User not found',
		AuthError: 'Password required',
		InvalidParameterException: 'Password required',
		InvalidPasswordException: 'Password must have uppercase characters'
	};

	let newPassword: string;
	async function submitHandler() {
		try {
			await resetPassword($userStore, newPassword);
		} catch (error) {
			if (error instanceof Error) {
				console.log(error, error.name);

				if (error.name === 'InvalidPasswordException') {
					errorType = error.message.split(':')[1].trimStart();
				} else {
					errorType = errorMap[error.name] ?? 'any';
				}
			}
			isLoading(false);
		}
	}
</script>

<div class="card-bordered card bg-base-100 md:max-w-sm lg:w-auto">
	<div class="card-body w-full p-4">
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

			<div class="h-8 w-full">
				<small class="animate-pulse text-sm text-error" class:invisible={errorType === undefined}
					>{errorType}</small
				>
			</div>

			<button type="submit" class="btn w-full">RESET</button>
		</form>
	</div>
</div>
