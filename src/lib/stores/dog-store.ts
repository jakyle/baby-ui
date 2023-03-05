import { readable } from "svelte/store";
import { Notification, pushNotification } from "./notification-store";


export const dogStore = readable('', (setDog: (val: string) => void) => {

	const getDogs = async () => {
		const result = await fetch('https://dog.ceo/api/breeds/image/random');
		const json = await result.json();
		setDog(json.message);
		pushNotification('got a dog!', Notification.INFO);
	}

	setInterval(async () => await getDogs(), 500);
});