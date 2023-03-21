/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createFeeding = /* GraphQL */ `
  mutation CreateFeeding(
    $input: CreateFeedingInput!
    $condition: ModelFeedingConditionInput
  ) {
    createFeeding(input: $input, condition: $condition) {
      DateTime
      ID
      By
      Oz
      type
      id
      createdAt
      updatedAt
    }
  }
`;
export const updateFeeding = /* GraphQL */ `
  mutation UpdateFeeding(
    $input: UpdateFeedingInput!
    $condition: ModelFeedingConditionInput
  ) {
    updateFeeding(input: $input, condition: $condition) {
      DateTime
      ID
      By
      Oz
      type
      id
      createdAt
      updatedAt
    }
  }
`;
export const deleteFeeding = /* GraphQL */ `
  mutation DeleteFeeding(
    $input: DeleteFeedingInput!
    $condition: ModelFeedingConditionInput
  ) {
    deleteFeeding(input: $input, condition: $condition) {
      DateTime
      ID
      By
      Oz
      type
      id
      createdAt
      updatedAt
    }
  }
`;
