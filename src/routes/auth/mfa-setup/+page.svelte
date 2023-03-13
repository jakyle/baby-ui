<script lang="ts">
	import { isLoading } from '$lib/stores/loading-store';
	import { pushNotification } from '$lib/stores/notification-store';
	import { mfaSetupStore, submitMfa, userStore } from '$lib/stores/user-store';
	import QrCode from 'svelte-qrcode';

	let challengeCode: string;

	let errorType: string | undefined;
	const errorMap: Record<string, string> = {
		InvalidParameterException: 'required 6 digit code',
		EnableSoftwareTokenMFAException: 'code mismatch',
		NotAuthorizedException: 'session timed out',
		any: 'invalid code'
	};

	async function submitHandler() {
		try {
			isLoading(true);
			await submitMfa($userStore, challengeCode ?? '');
		} catch (error) {
			if (error instanceof Error) {
				console.log(error.name);
				errorType = errorMap[error.name] ?? 'any';
			}

			isLoading(false);
		}
	}

	const copyMfaCode = async () => {
		try {
			await navigator.clipboard.writeText($mfaSetupStore?.code ?? '');
			pushNotification('Code Copied To Clipboard!');
		} catch (error) {
			pushNotification('Failed to copy to clipboard!');
		}
	}
</script>

<div class="card-bordered card bg-base-100 max-w-sm landscape:sm:max-w-xl landscape:sm:max-h-72">
	<div class="card-body w-full p-4">
		{#await $mfaSetupStore then mfaSetup}
			{#if mfaSetup}
				<div class="flex flex-col items-center justify-center gap-2 landscape:sm:grid landscape:sm:gap-4">
					<p
						class="whitespace-normal text-center landscape:sm:col-start-1 landscape:sm:col-end-5 landscape:sm:row-start-1"
					>
						Scan the code below with your preferred authenticator (like google authenticator) then
						type in the number in the field <span class="font-extrabold underline">OR</span> copy the code under the QR and
						paste it in your auth app.
					</p>

					<div
						class="landscape:sm:col-start-2 landscape:sm:col-end-3 landscape:sm:row-start-2 landscape:sm:row-end-4"
					>
						<QrCode value={mfaSetup.qr} />
					</div>

					<div
						class="flex flex-col gap-4 sm:flex-row justify-center  items-center sm:gap-2 text-xs landscape:sm:col-start-1 landscape:sm:col-end-5 landscape:sm:row-start-4 landscape:sm:text-base"
					>
						<code class="text-xs bg-base-200 py-1 px-1">{mfaSetup.code}</code>
						<button class=" w-36 sm:w-12 sm:btn-sm btn" on:click={async () => await copyMfaCode()}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="h-5 w-5"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
								/>
							</svg>
						</button>
					</div>

					<form
						on:submit|preventDefault={async () => await submitHandler()}
						class="landscape:sm:col-start-3 landscape:sm:row-start-3"
					>
						<div class="form-control w-full">
							<label class="input-group">
								<span>CODE</span>
								<input type="input" class="input-bordered input" bind:value={challengeCode} />
							</label>
						</div>

						<button class="btn w-full sm:w-72" type="submit">SUBMIT</button>
						<div class="h-3 w-full">
							<small class="animate-pulse text-sm text-error" class:invisible={errorType === undefined}
								>{errorType}</small
							>
						</div>
					</form>
				</div>
			{:else}
				<p class="text-lg text-error">no mfa setup</p>
			{/if}
		{/await}
	</div>
</div>
