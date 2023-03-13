<script lang="ts">
	import { isLoading } from '$lib/stores/loading-store';
	import { confirmSignIn, userStore } from '$lib/stores/user-store';

	let errorType: string | undefined;
	const errorMap: Record<string, string> = {
		AuthError: 'Code cannot be empty',
		CodeMismatchException: 'Code does not match',
		InvalidParameterException: 'required 6 digit code',
		EnableSoftwareTokenMFAException: 'code mismatch',
		NotAuthorizedException: 'session timed out',
		any: 'invalid code'
	};

	let challengeCode: string;
	async function submitHandler() {
		try {
			await confirmSignIn($userStore, challengeCode);
		} catch (error) {
			if (error instanceof Error) {
				console.log(error);
				errorType = errorMap[error.name] ?? 'invalid code';
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
			<p>Enter your auth code.</p>
			<div class="form-control w-full">
				<label class="input-group">
					<span>CODE</span>
					<input type="input" class="input-bordered input w-full" bind:value={challengeCode} />
				</label>
			</div>

			<div class="h-3 w-full">
				<small class="animate-pulse text-sm text-error" class:invisible={errorType === undefined}
					>{errorType}</small
				>
			</div>

			<button type="submit" class="btn w-full">CODE</button>
		</form>
	</div>
</div>
