/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getFeeding = /* GraphQL */ `
  query GetFeeding($id: ID!) {
    getFeeding(id: $id) {
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


export const listFeedings = /* GraphQL */ `
  query ListFeedings(
    $filter: ModelFeedingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFeedings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        DateTime
        ID
        By
        Oz
        type
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;


export const feedingByDate = /* GraphQL */ `
  query FeedingByDate(
    $type: String!
    $DateTime: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelFeedingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    feedingByDate(
      type: $type
      DateTime: $DateTime
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        DateTime
        ID
        By
        Oz
        type
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
