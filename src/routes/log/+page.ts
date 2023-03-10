import { API, type GraphQLResult } from '@aws-amplify/api';
import type { ListFeedingsQuery } from '../../API';
import type { FeedingItem } from '../../api/feeding.model';
import config from '../../aws-exports';
import { listFeedings } from '../../graphql/queries';

API.configure(config)

async function list() {
	const response = await API.graphql({
		query: listFeedings,
		variables: {
			// <your variables, optional>
		},
	})

	return response as GraphQLResult<ListFeedingsQuery>;
}

export async function load() {
	const result = await list();
	const feedingItems: Array<FeedingItem> = result.data?.listFeedings?.items?.map((item) => ({
		id: item?.Id ?? '',
		by: item?.By ?? '',
		oz: item?.Oz ?? 0,
		dateTime: item?.DateTime ?? ''
	})) ?? [];

	return {feedingItems};
}