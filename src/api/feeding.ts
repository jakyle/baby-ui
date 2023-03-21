import { API, type GraphQLResult } from "@aws-amplify/api";
import type { Observable } from 'zen-observable-ts';
import type { AddFeedingItem } from './feeding.model';
import config from "../aws-exports";
import { createFeeding } from "../graphql/mutations";
import { v4 as uuidv4 } from 'uuid';
import type { CreateFeedingInput, CreateFeedingMutation, FeedingByDateQuery, OnCreateFeedingSubscription } from '../API';
import { onCreateFeeding } from "../graphql/subscriptions";
import { feedingByDate } from "../graphql/queries";


export function feedingSubscription() {
	API.configure(config);
	const sub: Observable<any> = API.graphql<OnCreateFeedingSubscription>({
		query: onCreateFeeding,
	}) as Observable<any>

	return sub;
}


export async function getFeedings() {
	API.configure(config)
	const response = await API.graphql({
		query: feedingByDate,
		variables: {
			limit: 50,
			type: 'feeding',
			sortDirection: 'DESC'
		},
	})

	return response as GraphQLResult<FeedingByDateQuery>;
}


export async function addFeeding(data: AddFeedingItem) {
	API.configure(config);
	const response = (await API.graphql<CreateFeedingInput>({
		query: createFeeding,
		variables: {
			input: {
				DateTime: data.dateTime,
				ID: uuidv4(),
				By: data.by,
				type: 'feeding',
				Oz: data.oz
			}
		},
	})) as GraphQLResult<CreateFeedingMutation>

	return response.data?.createFeeding;
}
