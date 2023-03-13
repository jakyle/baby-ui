import { API, GRAPHQL_AUTH_MODE, type GraphQLResult } from "@aws-amplify/api";
import type { Observable } from 'zen-observable-ts';
import type { AddFeedingItem }  from './feeding.model';
import config from "../aws-exports";
import { createFeeding } from "../graphql/mutations";
import { v4 as uuidv4 } from 'uuid';
import type { CreateFeedingInput, CreateFeedingMutation, ListFeedingsQuery, OnCreateFeedingSubscription } from '../API';
import { onCreateFeeding } from "../graphql/subscriptions";
import { listFeedings } from "../graphql/queries";


export function feedingSubscription() {
	API.configure(config);
	const sub: Observable<any> = API.graphql<OnCreateFeedingSubscription>({
		query: onCreateFeeding,
		authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
	}) as Observable<any>

	return sub;
}


export async function getFeedings() {
	API.configure(config)
	const response = await API.graphql({
		query: listFeedings,
		variables: {
			// <your variables, optional>
		},
		authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
	})

	return response as GraphQLResult<ListFeedingsQuery>;
}


export async function addFeeding(data: AddFeedingItem) {
	API.configure(config);
	const response = (await API.graphql<CreateFeedingInput>({
		query: createFeeding,
		variables: {
			input: {
				DateTime: data.dateTime,
				Id: uuidv4(),
				By: data.by,
				Oz: data.oz
			}
		},
		authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
	})) as GraphQLResult<CreateFeedingMutation>

	return response.data?.createFeeding;
}






// import { API, type GraphQLResult } from '@aws-amplify/api';
// import type { ListFeedingsQuery } from '../API';
// import type { FeedingItem } from '../api/feeding.model';
// import config from '../aws-exports';
// import { listFeedings } from '../graphql/queries';

