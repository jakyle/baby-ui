import { writable } from "svelte/store";

export enum Notification {
	INFO = 'info',
	SUCCESS = 'success',
	WARNING = 'warning',
	ERROR = 'error'
}

export type NotificationType = typeof Notification[keyof typeof Notification];

type NotificationPayload = {
	type: Notification,
	message: string,
	id: number
}

export const notificationStore = writable<Array<NotificationPayload>>([]);

let id: number = 0;
export const pushNotification = (message: string, type: Notification = Notification.INFO, timer: number = 3000) => {
	notificationStore.update(n => {
		const notifications = [...n];
		notifications.unshift({ message, type, id });
		let currentId = id;
		setTimeout(() => removeNotification(currentId), timer);
		id++;
		return notifications;
	});
}

export const removeNotification = (id: number) => {
	notificationStore.update(n => {
		const notifications = [...n];
		const idx = notifications.findIndex(n => n.id === id);
		if (idx >= 0) {
			notifications.splice(idx, 1);
		}
		return notifications;
	})
}