import { derived, writable } from 'svelte/store';
import { addFeeding, getFeedings } from '../../api/feeding';
import type { FeedingItem, AddFeedingItem } from '../../api/feeding.model';
import { toLocalTime, threeHoursFromNow, getCalculatedTime } from '../../util/time-helper';
import { isLoading } from './loading-store';
import { Notification, pushNotification } from './notification-store';

const getLocalFeeding = (): Array<FeedingItem> => {
	const feeding = localStorage.getItem('feeding');
	const now = new Date();
	return feeding !== null ? JSON.parse(feeding) as Array<FeedingItem> : [{
		dateTime: now.toISOString(),
		oz: 2,
		by: 'Ya boi!',
		id: "12345"
	}];
}

export const feedingStore = writable<Array<FeedingItem>>(getLocalFeeding());

const getFeedingItem = async (): Promise<Array<FeedingItem>> => {
	try {
		const result = await getFeedings();
		const feedingItems: Array<FeedingItem> = result.data?.listFeedings?.items?.map((item) => ({
			id: item?.Id ?? '',
			by: item?.By ?? '',
			oz: item?.Oz ?? 0,
			dateTime: item?.DateTime ?? ''
		})) ?? [];

		if (feedingItems.length < 1) {
			return getLocalFeeding();
		}

		feedingItems.sort((a, b) => new Date(b.dateTime).getTime() - new Date(a.dateTime).getTime());

		return feedingItems;
	} catch (error) {
		console.log(error);
		return getLocalFeeding();
	}
}

export const tryAddFeeding = (feedItem: FeedingItem) => {
	feedingStore.update(feedings => {
		const feedingItems = [...feedings];

		const potentialFeed = feedingItems.find(feed => feed.id === feedItem.id);
		if (potentialFeed === undefined) {
			setFeedingData();
		}

		return feedingItems
	})
}

export const setFeedingData = async (): Promise<void> => {
	isLoading(true);
	try {
		feedingStore.set(await getFeedingItem());
	} catch (error) {
		pushNotification('Something went wrong when fetching data', Notification.ERROR)
		console.error(error);
	} finally {
		isLoading(false);
	}
}


export const sendFeeding = async (date: string, time: string, oz: number, by: string) => {
	const dateTime = new Date(`${date}T${time}`).toISOString();
	const payload: AddFeedingItem = {
		dateTime,
		oz,
		by
	};

	const result = await addFeeding(payload);
	if (result) {
		pushNotification('Feeding Success!', Notification.SUCCESS)
		feedingStore.update(feeding => {
			const updatedFeeding = [...feeding, {
				dateTime: result!.DateTime,
				id: result.Id,
				by: result.By!,
				oz: result.Oz!,
			}];

			updatedFeeding.sort((a, b) => new Date(b.dateTime).getTime() - new Date(a.dateTime).getTime());
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
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		const { dateTime, oz, by } = $feeding.at(0)!;
		const date = new Date(dateTime).toLocaleDateString('sv');
		const time = new Date(dateTime).toLocaleTimeString('sv');

		return {
			time: toLocalTime(time),
			date: new Date(dateTime).toLocaleDateString(),
			nextFeeding: threeHoursFromNow(date, time).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }),
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
		const nextFeedingDate = threeHoursFromNow(dateIso, timeIso).getTime();
		setTimer(getCalculatedTime(nextFeedingDate));

		const interval = setInterval(() => {
			const nextFeedingDate = threeHoursFromNow(dateIso, timeIso).getTime();
			setTimer(getCalculatedTime(nextFeedingDate));
		}, 1000);

		return () => clearInterval(interval);
	}
);

