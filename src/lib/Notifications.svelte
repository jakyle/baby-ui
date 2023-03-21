<script lang="ts">
    import { fly, scale } from "svelte/transition";
	import { classes } from "../util/html-helpers";
	import { notificationStore, Notification, removeNotification, type NotificationType } from "./stores/notification-store";

	const alertMap: Record<NotificationType, string> = {
		'info': 'alert-info',
		'error': 'alert-error',
		'success': 'alert-success',
		'warning': 'alert-warning',
	}

	const notificationClasses = (notification: Notification) =>
    classes('absolute', 'alert', 'pointer-events-auto', alertMap[notification]);

</script>

{#await $notificationStore then notifications}
  {#each notifications as { id, message, type } (id)}
    <div
      in:fly={{ y: -200, duration: 180 }}
      out:scale={{ duration: 400 }}
      class={notificationClasses(type)}
    >
      {message}
      <button class="btn-sm btn-circle btn" on:click={() => removeNotification(id)}>X</button>
    </div>
  {/each}
{/await}
