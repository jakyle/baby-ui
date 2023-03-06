/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getFeeding = /* GraphQL */ `
  query GetFeeding($Id: String!, $DateTime: String!) {
    getFeeding(Id: $Id, DateTime: $DateTime) {
      DateTime
      Id
      By
      Oz
    }
  }
`;
export const listFeedings = /* GraphQL */ `
  query ListFeedings(
    $filter: TableFeedingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFeedings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        DateTime
        Id
        By
        Oz
      }
      nextToken
    }
  }
`;
