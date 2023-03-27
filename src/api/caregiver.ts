import { API, type GraphQLResult } from "@aws-amplify/api";
import type { CareGiver, CaregiverByUserQuery, CreateCareGiverInput, CreateCareGiverMutation } from "../API";
import { caregiverByUser } from "../graphql/queries";
import  { createCareGiver } from "../graphql/mutations";
import config from "../aws-exports";

export async function getCareGiverByUserId(userId: string): Promise<CareGiver | null> {
	API.configure(config);
	const response = (await API.graphql<CaregiverByUserQuery>({
		query: caregiverByUser,
		variables: {
			userId,
			limit: 1
		},
	}) as GraphQLResult<CaregiverByUserQuery>);

	return response.data?.caregiverByUser?.items?.at?.(0) as CareGiver ?? null;
}


export async function addCareGiver(userId: string, email: string, name?: string): Promise<CareGiver | null> {
	API.configure(config);

	const response = (await API.graphql<CreateCareGiverInput>({
		query: createCareGiver,
		variables: {
			input: {
				userId,
				email,
				name: name ?? null,
			}
		},
	})) as GraphQLResult<CreateCareGiverMutation>

	return response.data?.createCareGiver as CareGiver ?? null;
}
