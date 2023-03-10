export type FeedingItem = {
	id: string,
	dateTime: string,
	by: string,
	oz: number
}

export type AddFeedingItem = Omit<FeedingItem, "id">;