/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCareGiver = /* GraphQL */ `
  query GetCareGiver($id: ID!) {
    getCareGiver(id: $id) {
      family {
        careGivers {
          nextToken
        }
        babies {
          nextToken
        }
        name
        id
        createdAt
        updatedAt
      }
      userId
      email
      name
      pendingInvites
      formulaFeeding {
        items {
          when
          type
          oz
          nextFeeding
          id
          createdAt
          updatedAt
          careGiverFormulaFeedingId
          babyFormulaFeedingId
          owner
        }
        nextToken
      }
      diaperChanges {
        items {
          when
          type
          waste
          id
          createdAt
          updatedAt
          careGiverDiaperChangesId
          babyDiaperChangesId
          owner
        }
        nextToken
      }
      id
      createdAt
      updatedAt
      familyCareGiversId
      owner
    }
  }
`;
export const listCareGivers = /* GraphQL */ `
  query ListCareGivers(
    $filter: ModelCareGiverFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCareGivers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        family {
          name
          id
          createdAt
          updatedAt
        }
        userId
        email
        name
        pendingInvites
        formulaFeeding {
          nextToken
        }
        diaperChanges {
          nextToken
        }
        id
        createdAt
        updatedAt
        familyCareGiversId
        owner
      }
      nextToken
    }
  }
`;
export const getFamily = /* GraphQL */ `
  query GetFamily($id: ID!) {
    getFamily(id: $id) {
      careGivers {
        items {
          userId
          email
          name
          pendingInvites
          id
          createdAt
          updatedAt
          familyCareGiversId
          owner
        }
        nextToken
      }
      babies {
        items {
          name
          dateOfBirth
          gender
          id
          createdAt
          updatedAt
          familyBabiesId
        }
        nextToken
      }
      name
      id
      createdAt
      updatedAt
    }
  }
`;
export const listFamilies = /* GraphQL */ `
  query ListFamilies(
    $filter: ModelFamilyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFamilies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        careGivers {
          nextToken
        }
        babies {
          nextToken
        }
        name
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getBaby = /* GraphQL */ `
  query GetBaby($id: ID!) {
    getBaby(id: $id) {
      name
      dateOfBirth
      gender
      family {
        careGivers {
          nextToken
        }
        babies {
          nextToken
        }
        name
        id
        createdAt
        updatedAt
      }
      formulaFeeding {
        items {
          when
          type
          oz
          nextFeeding
          id
          createdAt
          updatedAt
          careGiverFormulaFeedingId
          babyFormulaFeedingId
          owner
        }
        nextToken
      }
      diaperChanges {
        items {
          when
          type
          waste
          id
          createdAt
          updatedAt
          careGiverDiaperChangesId
          babyDiaperChangesId
          owner
        }
        nextToken
      }
      id
      createdAt
      updatedAt
      familyBabiesId
    }
  }
`;
export const listBabies = /* GraphQL */ `
  query ListBabies(
    $filter: ModelBabyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBabies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        name
        dateOfBirth
        gender
        family {
          name
          id
          createdAt
          updatedAt
        }
        formulaFeeding {
          nextToken
        }
        diaperChanges {
          nextToken
        }
        id
        createdAt
        updatedAt
        familyBabiesId
      }
      nextToken
    }
  }
`;
export const getFormulaFeeding = /* GraphQL */ `
  query GetFormulaFeeding($id: ID!) {
    getFormulaFeeding(id: $id) {
      by {
        family {
          name
          id
          createdAt
          updatedAt
        }
        userId
        email
        name
        pendingInvites
        formulaFeeding {
          nextToken
        }
        diaperChanges {
          nextToken
        }
        id
        createdAt
        updatedAt
        familyCareGiversId
        owner
      }
      when
      for {
        name
        dateOfBirth
        gender
        family {
          name
          id
          createdAt
          updatedAt
        }
        formulaFeeding {
          nextToken
        }
        diaperChanges {
          nextToken
        }
        id
        createdAt
        updatedAt
        familyBabiesId
      }
      type
      oz
      nextFeeding
      id
      createdAt
      updatedAt
      careGiverFormulaFeedingId
      babyFormulaFeedingId
      owner
    }
  }
`;
export const listFormulaFeedings = /* GraphQL */ `
  query ListFormulaFeedings(
    $filter: ModelFormulaFeedingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFormulaFeedings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        by {
          userId
          email
          name
          pendingInvites
          id
          createdAt
          updatedAt
          familyCareGiversId
          owner
        }
        when
        for {
          name
          dateOfBirth
          gender
          id
          createdAt
          updatedAt
          familyBabiesId
        }
        type
        oz
        nextFeeding
        id
        createdAt
        updatedAt
        careGiverFormulaFeedingId
        babyFormulaFeedingId
        owner
      }
      nextToken
    }
  }
`;
export const byFeedingDate = /* GraphQL */ `
  query ByFeedingDate(
    $type: String!
    $when: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelFormulaFeedingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    byFeedingDate(
      type: $type
      when: $when
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        by {
          userId
          email
          name
          pendingInvites
          id
          createdAt
          updatedAt
          familyCareGiversId
          owner
        }
        when
        for {
          name
          dateOfBirth
          gender
          id
          createdAt
          updatedAt
          familyBabiesId
        }
        type
        oz
        nextFeeding
        id
        createdAt
        updatedAt
        careGiverFormulaFeedingId
        babyFormulaFeedingId
        owner
      }
      nextToken
    }
  }
`;
export const searchFormulaFeedings = /* GraphQL */ `
  query SearchFormulaFeedings(
    $filter: SearchableFormulaFeedingFilterInput
    $sort: [SearchableFormulaFeedingSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableFormulaFeedingAggregationInput]
  ) {
    searchFormulaFeedings(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        by {
          userId
          email
          name
          pendingInvites
          id
          createdAt
          updatedAt
          familyCareGiversId
          owner
        }
        when
        for {
          name
          dateOfBirth
          gender
          id
          createdAt
          updatedAt
          familyBabiesId
        }
        type
        oz
        nextFeeding
        id
        createdAt
        updatedAt
        careGiverFormulaFeedingId
        babyFormulaFeedingId
        owner
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const getDiaperChange = /* GraphQL */ `
  query GetDiaperChange($id: ID!) {
    getDiaperChange(id: $id) {
      by {
        family {
          name
          id
          createdAt
          updatedAt
        }
        userId
        email
        name
        pendingInvites
        formulaFeeding {
          nextToken
        }
        diaperChanges {
          nextToken
        }
        id
        createdAt
        updatedAt
        familyCareGiversId
        owner
      }
      when
      for {
        name
        dateOfBirth
        gender
        family {
          name
          id
          createdAt
          updatedAt
        }
        formulaFeeding {
          nextToken
        }
        diaperChanges {
          nextToken
        }
        id
        createdAt
        updatedAt
        familyBabiesId
      }
      type
      waste
      id
      createdAt
      updatedAt
      careGiverDiaperChangesId
      babyDiaperChangesId
      owner
    }
  }
`;
export const listDiaperChanges = /* GraphQL */ `
  query ListDiaperChanges(
    $filter: ModelDiaperChangeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDiaperChanges(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        by {
          userId
          email
          name
          pendingInvites
          id
          createdAt
          updatedAt
          familyCareGiversId
          owner
        }
        when
        for {
          name
          dateOfBirth
          gender
          id
          createdAt
          updatedAt
          familyBabiesId
        }
        type
        waste
        id
        createdAt
        updatedAt
        careGiverDiaperChangesId
        babyDiaperChangesId
        owner
      }
      nextToken
    }
  }
`;
export const byDiaperChangeDate = /* GraphQL */ `
  query ByDiaperChangeDate(
    $type: String!
    $when: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelDiaperChangeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    byDiaperChangeDate(
      type: $type
      when: $when
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        by {
          userId
          email
          name
          pendingInvites
          id
          createdAt
          updatedAt
          familyCareGiversId
          owner
        }
        when
        for {
          name
          dateOfBirth
          gender
          id
          createdAt
          updatedAt
          familyBabiesId
        }
        type
        waste
        id
        createdAt
        updatedAt
        careGiverDiaperChangesId
        babyDiaperChangesId
        owner
      }
      nextToken
    }
  }
`;
export const searchDiaperChanges = /* GraphQL */ `
  query SearchDiaperChanges(
    $filter: SearchableDiaperChangeFilterInput
    $sort: [SearchableDiaperChangeSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableDiaperChangeAggregationInput]
  ) {
    searchDiaperChanges(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        by {
          userId
          email
          name
          pendingInvites
          id
          createdAt
          updatedAt
          familyCareGiversId
          owner
        }
        when
        for {
          name
          dateOfBirth
          gender
          id
          createdAt
          updatedAt
          familyBabiesId
        }
        type
        waste
        id
        createdAt
        updatedAt
        careGiverDiaperChangesId
        babyDiaperChangesId
        owner
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
