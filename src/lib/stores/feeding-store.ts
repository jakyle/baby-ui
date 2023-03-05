import { derived, writable } from 'svelte/store';
import { putFeeding } from '../../api/feeding';
import { toLocalTime, threeHoursFromNow, getCalculatedTime } from '../../util/time-helper';
import { Notification, pushNotification } from './notification-store';

export type FeedingPayload = {
	dateTime: string,
	oz: number,
	by: string
}

const getFeedingPayload = (): Array<FeedingPayload> => {

	console.log(window);
	const feeding = localStorage.getItem('feeding');
	const now = new Date();
	return feeding !== null ? JSON.parse(feeding) as Array<FeedingPayload> : [{
		dateTime: now.toISOString(),
		oz: 2,
		by: 'Ya boi!'
	}];
}

export const feedingStore = writable<Array<FeedingPayload>>(getFeedingPayload());

export const sendFeeding = async (date: string, time: string, oz: number, by: string) => {
	const dateTime = new Date(`${date}T${time}`).toISOString();
	const payload: FeedingPayload = {
		dateTime,
		oz,
		by
	};

	if (await putFeeding(payload)) {
		pushNotification('Feeding Success!', Notification.SUCCESS)
		feedingStore.update(feeding => {
			const updatedFeeding = [...feeding, payload];
			localStorage.setItem('feeding', JSON.stringify(updatedFeeding));
			return updatedFeeding;
		});
	} else {
		pushNotification('Feeding Failed!', Notification.ERROR);
	}

}

export const feedingProgress = writable(false);

export const isProgressing = derived(feedingProgress, (isFeeding, setProgress: (val: boolean) => void) => {


	let interval: null | NodeJS.Timer;
	if (isFeeding) {
		setProgress(false);
		interval = setTimeout(() => {
			setProgress(true)
		}, 1);
	} else {
		setProgress(false);
	}

	return () => {
		if (interval) {
			clearInterval(interval);
		}
	};
});

export const currentFeedingModel = derived(
	feedingStore,
	($feeding) => {
		const { dateTime, oz, by } = $feeding.at(-1)!;
		const date = new Date(dateTime).toLocaleDateString('sv');
		const time = new Date(dateTime).toLocaleTimeString('sv');

		return {
			time: toLocalTime(time),
			date: new Date(dateTime).toLocaleDateString(),
			nextFeeding: threeHoursFromNow(date, time).toLocaleTimeString(),
			oz,
			fedBy: by,
		}
	}
)


export const feedingCountDown = derived(
	currentFeedingModel,
	({ date, time }, setTimer: (val: string) => void) => {
		const dateTime = new Date(`${date} ${time}`);
		const dateIso = dateTime.toLocaleDateString("sv");
		const timeIso = dateTime.toLocaleTimeString("sv");
		let nextFeedingDate = threeHoursFromNow(dateIso, timeIso).getTime();
		setTimer(getCalculatedTime(nextFeedingDate));

		const interval = setInterval(() => {
			let nextFeedingDate = threeHoursFromNow(dateIso, timeIso).getTime();
			setTimer(getCalculatedTime(nextFeedingDate));
		}, 1000);

		return () => clearInterval(interval);
	}
);

