<script lang="ts">
	import { isLoading } from '$lib/stores/loading-store';
	import { signIn } from '$lib/stores/user-store';

	let email: string;
	let password: string;
	let errorType: string | undefined;

	const errorMap: Record<string, string> = {
		NotAuthorizedException: 'Invalid password',
		UserNotFoundException: 'User not found',
		AuthError: 'Username and Password required',
		InvalidParameterException: 'Username and Password required'
	};

	async function submitHandler() {
		try {
			await signIn(email, password);
		} catch (error: any) {
			if (error instanceof Error) {
				console.log(error);
				errorType = errorMap[error.name] ?? 'any';
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

			<div class="h-3 w-full">
				<small class="animate-pulse text-sm text-error" class:invisible={errorType === undefined}
					>{errorType}</small
				>
			</div>

			<button type="submit" class="btn w-full">LOGIN</button>
		</form>
	</div>
</div>
