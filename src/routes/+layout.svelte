<script lang="ts">
	import '../app.css';
	import { Amplify } from 'aws-amplify';
	import { feedingSubscription } from '../api/feeding';
	import awsconfig from '../aws-exports';
	import Overlay from '../lib/Overlay.svelte';
	import { page } from '$app/stores';
	import { beforeNavigate } from '$app/navigation';
	import { tryAddFeeding } from '$lib/stores/feeding-store';
	import { onMount } from 'svelte';
	import { startup } from '$lib/main/startup';

	Amplify.configure(awsconfig);

	const { needsToLogin } = startup();

	needsToLogin($page?.route.id ?? '');

	beforeNavigate(async (beforeNavigate) => {
		const shouldNavigate = await needsToLogin(beforeNavigate.to?.url.pathname ?? '');
		if (shouldNavigate) {
			beforeNavigate.cancel();
		}
	});

	onMount(() => {
		const sub = feedingSubscription().subscribe((value) => {
			const { By, DateTime, Id, Oz } = value.value.data.onCreateFeeding;
			tryAddFeeding({ by: By, dateTime: DateTime, id: Id, oz: Oz });
		});

		return () => sub.unsubscribe();
	});
</script>

<div id="app-layout" class="relative flex h-screen w-screen flex-col bg-primary">
	<div class="flex-1">
		<Overlay />
		<slot />
	</div>
</div>
