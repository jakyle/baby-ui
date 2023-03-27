import { API, type GraphQLResult } from "@aws-amplify/api";
import type { Observable } from 'zen-observable-ts';
import type { AddFeedingItem } from './feeding.model';
import config from "../aws-exports";
import { createFormulaFeeding } from "../graphql/mutations";
import { v4 as uuidv4 } from 'uuid';
import type { CreateFormulaFeedingInput, CreateFormulaFeedingMutation, ByFeedingDateQuery, OnCreateFormulaFeedingSubscription, FormulaFeeding } from '../API';
import { onCreateFormulaFeeding } from "../graphql/subscriptions";
import { byFeedingDate } from "../graphql/queries";


export function feedingSubscription() {
	API.configure(config);
	const sub: Observable<any> = API.graphql<OnCreateFormulaFeedingSubscription>({
		query: onCreateFormulaFeeding,
	}) as Observable<any>

	return sub;
}


export async function getFeedings(): Promise<FormulaFeeding[]> {
	API.configure(config)
	const response = await API.graphql({
		query: byFeedingDate,
		variables: {
			limit: 50,
			type: 'feeding',
			sortDirection: 'DESC'
		},
	}) as GraphQLResult<ByFeedingDateQuery>

	return (response.data?.byFeedingDate?.items ?? []) as FormulaFeeding[];
}


export async function addFeeding(data: AddFeedingItem) {
	API.configure(config);
	const response = (await API.graphql<CreateFormulaFeedingInput>({
		query: createFormulaFeeding,
		variables: {
			input: {
				DateTime: data.dateTime,
				ID: uuidv4(),
				By: data.by,
				type: 'feeding',
				Oz: data.oz
			}
		},
	})) as GraphQLResult<CreateFormulaFeedingMutation>

	return response.data?.createFormulaFeeding;
}
