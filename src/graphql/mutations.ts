/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCareGiver = /* GraphQL */ `
  mutation CreateCareGiver(
    $input: CreateCareGiverInput!
    $condition: ModelCareGiverConditionInput
  ) {
    createCareGiver(input: $input, condition: $condition) {
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
export const updateCareGiver = /* GraphQL */ `
  mutation UpdateCareGiver(
    $input: UpdateCareGiverInput!
    $condition: ModelCareGiverConditionInput
  ) {
    updateCareGiver(input: $input, condition: $condition) {
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
export const deleteCareGiver = /* GraphQL */ `
  mutation DeleteCareGiver(
    $input: DeleteCareGiverInput!
    $condition: ModelCareGiverConditionInput
  ) {
    deleteCareGiver(input: $input, condition: $condition) {
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
export const createFamily = /* GraphQL */ `
  mutation CreateFamily(
    $input: CreateFamilyInput!
    $condition: ModelFamilyConditionInput
  ) {
    createFamily(input: $input, condition: $condition) {
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
export const updateFamily = /* GraphQL */ `
  mutation UpdateFamily(
    $input: UpdateFamilyInput!
    $condition: ModelFamilyConditionInput
  ) {
    updateFamily(input: $input, condition: $condition) {
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
export const deleteFamily = /* GraphQL */ `
  mutation DeleteFamily(
    $input: DeleteFamilyInput!
    $condition: ModelFamilyConditionInput
  ) {
    deleteFamily(input: $input, condition: $condition) {
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
export const createBaby = /* GraphQL */ `
  mutation CreateBaby(
    $input: CreateBabyInput!
    $condition: ModelBabyConditionInput
  ) {
    createBaby(input: $input, condition: $condition) {
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
export const updateBaby = /* GraphQL */ `
  mutation UpdateBaby(
    $input: UpdateBabyInput!
    $condition: ModelBabyConditionInput
  ) {
    updateBaby(input: $input, condition: $condition) {
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
export const deleteBaby = /* GraphQL */ `
  mutation DeleteBaby(
    $input: DeleteBabyInput!
    $condition: ModelBabyConditionInput
  ) {
    deleteBaby(input: $input, condition: $condition) {
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
export const createFormulaFeeding = /* GraphQL */ `
  mutation CreateFormulaFeeding(
    $input: CreateFormulaFeedingInput!
    $condition: ModelFormulaFeedingConditionInput
  ) {
    createFormulaFeeding(input: $input, condition: $condition) {
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
export const updateFormulaFeeding = /* GraphQL */ `
  mutation UpdateFormulaFeeding(
    $input: UpdateFormulaFeedingInput!
    $condition: ModelFormulaFeedingConditionInput
  ) {
    updateFormulaFeeding(input: $input, condition: $condition) {
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
export const deleteFormulaFeeding = /* GraphQL */ `
  mutation DeleteFormulaFeeding(
    $input: DeleteFormulaFeedingInput!
    $condition: ModelFormulaFeedingConditionInput
  ) {
    deleteFormulaFeeding(input: $input, condition: $condition) {
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
export const createDiaperChange = /* GraphQL */ `
  mutation CreateDiaperChange(
    $input: CreateDiaperChangeInput!
    $condition: ModelDiaperChangeConditionInput
  ) {
    createDiaperChange(input: $input, condition: $condition) {
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
export const updateDiaperChange = /* GraphQL */ `
  mutation UpdateDiaperChange(
    $input: UpdateDiaperChangeInput!
    $condition: ModelDiaperChangeConditionInput
  ) {
    updateDiaperChange(input: $input, condition: $condition) {
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
export const deleteDiaperChange = /* GraphQL */ `
  mutation DeleteDiaperChange(
    $input: DeleteDiaperChangeInput!
    $condition: ModelDiaperChangeConditionInput
  ) {
    deleteDiaperChange(input: $input, condition: $condition) {
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
