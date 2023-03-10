import { API, type GraphQLResult } from "@aws-amplify/api";
import type { AddFeedingItem }  from './feeding.model';
import config from "../aws-exports";
import { createFeeding } from "../graphql/mutations";
import { v4 as uuidv4 } from 'uuid';
import type { CreateFeedingInput, CreateFeedingMutation } from '../API';





export async function addFeeding(data: AddFeedingItem) {
	API.configure(config)
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
	})) as GraphQLResult<CreateFeedingMutation>

	return response.data?.createFeeding;
}