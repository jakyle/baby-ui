/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCareGiver = /* GraphQL */ `
  subscription OnCreateCareGiver(
    $filter: ModelSubscriptionCareGiverFilterInput
    $owner: String
  ) {
    onCreateCareGiver(filter: $filter, owner: $owner) {
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
      pendingInvites {
        id
        name
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
      familyCareGiversId
      owner
    }
  }
`;
export const onUpdateCareGiver = /* GraphQL */ `
  subscription OnUpdateCareGiver(
    $filter: ModelSubscriptionCareGiverFilterInput
    $owner: String
  ) {
    onUpdateCareGiver(filter: $filter, owner: $owner) {
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
      pendingInvites {
        id
        name
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
      familyCareGiversId
      owner
    }
  }
`;
export const onDeleteCareGiver = /* GraphQL */ `
  subscription OnDeleteCareGiver(
    $filter: ModelSubscriptionCareGiverFilterInput
    $owner: String
  ) {
    onDeleteCareGiver(filter: $filter, owner: $owner) {
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
      pendingInvites {
        id
        name
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
      familyCareGiversId
      owner
    }
  }
`;
export const onCreateFamily = /* GraphQL */ `
  subscription OnCreateFamily($filter: ModelSubscriptionFamilyFilterInput) {
    onCreateFamily(filter: $filter) {
      careGivers {
        items {
          userId
          email
          name
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
export const onUpdateFamily = /* GraphQL */ `
  subscription OnUpdateFamily($filter: ModelSubscriptionFamilyFilterInput) {
    onUpdateFamily(filter: $filter) {
      careGivers {
        items {
          userId
          email
          name
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
export const onDeleteFamily = /* GraphQL */ `
  subscription OnDeleteFamily($filter: ModelSubscriptionFamilyFilterInput) {
    onDeleteFamily(filter: $filter) {
      careGivers {
        items {
          userId
          email
          name
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
export const onCreateBaby = /* GraphQL */ `
  subscription OnCreateBaby($filter: ModelSubscriptionBabyFilterInput) {
    onCreateBaby(filter: $filter) {
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
export const onUpdateBaby = /* GraphQL */ `
  subscription OnUpdateBaby($filter: ModelSubscriptionBabyFilterInput) {
    onUpdateBaby(filter: $filter) {
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
export const onDeleteBaby = /* GraphQL */ `
  subscription OnDeleteBaby($filter: ModelSubscriptionBabyFilterInput) {
    onDeleteBaby(filter: $filter) {
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
export const onCreateFormulaFeeding = /* GraphQL */ `
  subscription OnCreateFormulaFeeding(
    $filter: ModelSubscriptionFormulaFeedingFilterInput
    $owner: String
  ) {
    onCreateFormulaFeeding(filter: $filter, owner: $owner) {
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
        pendingInvites {
          id
          name
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
export const onUpdateFormulaFeeding = /* GraphQL */ `
  subscription OnUpdateFormulaFeeding(
    $filter: ModelSubscriptionFormulaFeedingFilterInput
    $owner: String
  ) {
    onUpdateFormulaFeeding(filter: $filter, owner: $owner) {
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
        pendingInvites {
          id
          name
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
export const onDeleteFormulaFeeding = /* GraphQL */ `
  subscription OnDeleteFormulaFeeding(
    $filter: ModelSubscriptionFormulaFeedingFilterInput
    $owner: String
  ) {
    onDeleteFormulaFeeding(filter: $filter, owner: $owner) {
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
        pendingInvites {
          id
          name
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
export const onCreateDiaperChange = /* GraphQL */ `
  subscription OnCreateDiaperChange(
    $filter: ModelSubscriptionDiaperChangeFilterInput
    $owner: String
  ) {
    onCreateDiaperChange(filter: $filter, owner: $owner) {
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
        pendingInvites {
          id
          name
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
export const onUpdateDiaperChange = /* GraphQL */ `
  subscription OnUpdateDiaperChange(
    $filter: ModelSubscriptionDiaperChangeFilterInput
    $owner: String
  ) {
    onUpdateDiaperChange(filter: $filter, owner: $owner) {
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
        pendingInvites {
          id
          name
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
export const onDeleteDiaperChange = /* GraphQL */ `
  subscription OnDeleteDiaperChange(
    $filter: ModelSubscriptionDiaperChangeFilterInput
    $owner: String
  ) {
    onDeleteDiaperChange(filter: $filter, owner: $owner) {
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
        pendingInvites {
          id
          name
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
