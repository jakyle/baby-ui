<script lang="ts">
	import { mfaSetupStore, submitMfa, userStore } from '$lib/stores/user-store';
	import QrCode from 'svelte-qrcode';

	let challengeCode: string;

	async function submitHandler() {
		await submitMfa($userStore, challengeCode);
	}
</script>

{#await $mfaSetupStore then mfaSetup}
	{#if mfaSetup}
		<form
			on:submit|preventDefault={async () => await submitHandler()}
			class="flex flex-col items-center justify-center gap-4"
		>
			<p>Scan the code below with your preferred authenticator (like google authenticator)</p>
			<p>then type in the number in the field below the QR code</p>
			<p>or copy the code under the QR and paste it in your auth app.</p>
			<QrCode value={mfaSetup.qr} />
			<code>{mfaSetup.code}</code>
			<div class="form-control w-full">
				<label class="input-group">
					<span>CODE</span>
					<input type="input" class="input-bordered input w-full" bind:value={challengeCode} />
				</label>
			</div>

			<button type="submit" class="btn w-full">CODE</button>
		</form>
	{:else}
		<p class="text-lg text-error">no mfa setup</p>
	{/if}
{/await}
