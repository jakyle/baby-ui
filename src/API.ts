/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCareGiverInput = {
  userId: string,
  email: string,
  name?: string | null,
  pendingInvites?: Array< string | null > | null,
  id?: string | null,
  familyCareGiversId?: string | null,
};

export type ModelCareGiverConditionInput = {
  userId?: ModelStringInput | null,
  email?: ModelStringInput | null,
  name?: ModelStringInput | null,
  pendingInvites?: ModelStringInput | null,
  and?: Array< ModelCareGiverConditionInput | null > | null,
  or?: Array< ModelCareGiverConditionInput | null > | null,
  not?: ModelCareGiverConditionInput | null,
  familyCareGiversId?: ModelIDInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type CareGiver = {
  __typename: "CareGiver",
  family?: Family | null,
  userId: string,
  email: string,
  name?: string | null,
  pendingInvites?: Array< string | null > | null,
  formulaFeeding?: ModelFormulaFeedingConnection | null,
  diaperChanges?: ModelDiaperChangeConnection | null,
  id: string,
  createdAt: string,
  updatedAt: string,
  familyCareGiversId?: string | null,
  owner?: string | null,
};

export type Family = {
  __typename: "Family",
  careGivers?: ModelCareGiverConnection | null,
  babies?: ModelBabyConnection | null,
  name: string,
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type ModelCareGiverConnection = {
  __typename: "ModelCareGiverConnection",
  items:  Array<CareGiver | null >,
  nextToken?: string | null,
};

export type ModelBabyConnection = {
  __typename: "ModelBabyConnection",
  items:  Array<Baby | null >,
  nextToken?: string | null,
};

export type Baby = {
  __typename: "Baby",
  name: string,
  dateOfBirth: string,
  gender: Gender,
  family?: Family | null,
  formulaFeeding?: ModelFormulaFeedingConnection | null,
  diaperChanges?: ModelDiaperChangeConnection | null,
  id: string,
  createdAt: string,
  updatedAt: string,
  familyBabiesId?: string | null,
};

export enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE",
}


export type ModelFormulaFeedingConnection = {
  __typename: "ModelFormulaFeedingConnection",
  items:  Array<FormulaFeeding | null >,
  nextToken?: string | null,
};

export type FormulaFeeding = {
  __typename: "FormulaFeeding",
  by: CareGiver,
  when: string,
  for: Baby,
  type: string,
  oz: number,
  nextFeeding: string,
  id: string,
  createdAt: string,
  updatedAt: string,
  careGiverFormulaFeedingId?: string | null,
  babyFormulaFeedingId?: string | null,
  owner?: string | null,
};

export type ModelDiaperChangeConnection = {
  __typename: "ModelDiaperChangeConnection",
  items:  Array<DiaperChange | null >,
  nextToken?: string | null,
};

export type DiaperChange = {
  __typename: "DiaperChange",
  by: CareGiver,
  when: string,
  for: Baby,
  type: string,
  waste: Waste,
  id: string,
  createdAt: string,
  updatedAt: string,
  careGiverDiaperChangesId?: string | null,
  babyDiaperChangesId?: string | null,
  owner?: string | null,
};

export enum Waste {
  PEE = "PEE",
  POOP = "POOP",
  BOTH = "BOTH",
}


export type UpdateCareGiverInput = {
  userId?: string | null,
  email?: string | null,
  name?: string | null,
  pendingInvites?: Array< string | null > | null,
  id: string,
  familyCareGiversId?: string | null,
};

export type DeleteCareGiverInput = {
  id: string,
};

export type CreateFamilyInput = {
  name: string,
  id?: string | null,
};

export type ModelFamilyConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelFamilyConditionInput | null > | null,
  or?: Array< ModelFamilyConditionInput | null > | null,
  not?: ModelFamilyConditionInput | null,
};

export type UpdateFamilyInput = {
  name?: string | null,
  id: string,
};

export type DeleteFamilyInput = {
  id: string,
};

export type CreateBabyInput = {
  name: string,
  dateOfBirth: string,
  gender: Gender,
  id?: string | null,
  familyBabiesId?: string | null,
};

export type ModelBabyConditionInput = {
  name?: ModelStringInput | null,
  dateOfBirth?: ModelStringInput | null,
  gender?: ModelGenderInput | null,
  and?: Array< ModelBabyConditionInput | null > | null,
  or?: Array< ModelBabyConditionInput | null > | null,
  not?: ModelBabyConditionInput | null,
  familyBabiesId?: ModelIDInput | null,
};

export type ModelGenderInput = {
  eq?: Gender | null,
  ne?: Gender | null,
};

export type UpdateBabyInput = {
  name?: string | null,
  dateOfBirth?: string | null,
  gender?: Gender | null,
  id: string,
  familyBabiesId?: string | null,
};

export type DeleteBabyInput = {
  id: string,
};

export type CreateFormulaFeedingInput = {
  when: string,
  type: string,
  oz: number,
  nextFeeding: string,
  id?: string | null,
  careGiverFormulaFeedingId?: string | null,
  babyFormulaFeedingId?: string | null,
};

export type ModelFormulaFeedingConditionInput = {
  when?: ModelStringInput | null,
  type?: ModelStringInput | null,
  oz?: ModelIntInput | null,
  nextFeeding?: ModelStringInput | null,
  and?: Array< ModelFormulaFeedingConditionInput | null > | null,
  or?: Array< ModelFormulaFeedingConditionInput | null > | null,
  not?: ModelFormulaFeedingConditionInput | null,
  careGiverFormulaFeedingId?: ModelIDInput | null,
  babyFormulaFeedingId?: ModelIDInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateFormulaFeedingInput = {
  when?: string | null,
  type?: string | null,
  oz?: number | null,
  nextFeeding?: string | null,
  id: string,
  careGiverFormulaFeedingId?: string | null,
  babyFormulaFeedingId?: string | null,
};

export type DeleteFormulaFeedingInput = {
  id: string,
};

export type CreateDiaperChangeInput = {
  when: string,
  type: string,
  waste: Waste,
  id?: string | null,
  careGiverDiaperChangesId?: string | null,
  babyDiaperChangesId?: string | null,
};

export type ModelDiaperChangeConditionInput = {
  when?: ModelStringInput | null,
  type?: ModelStringInput | null,
  waste?: ModelWasteInput | null,
  and?: Array< ModelDiaperChangeConditionInput | null > | null,
  or?: Array< ModelDiaperChangeConditionInput | null > | null,
  not?: ModelDiaperChangeConditionInput | null,
  careGiverDiaperChangesId?: ModelIDInput | null,
  babyDiaperChangesId?: ModelIDInput | null,
};

export type ModelWasteInput = {
  eq?: Waste | null,
  ne?: Waste | null,
};

export type UpdateDiaperChangeInput = {
  when?: string | null,
  type?: string | null,
  waste?: Waste | null,
  id: string,
  careGiverDiaperChangesId?: string | null,
  babyDiaperChangesId?: string | null,
};

export type DeleteDiaperChangeInput = {
  id: string,
};

export type ModelCareGiverFilterInput = {
  userId?: ModelStringInput | null,
  email?: ModelStringInput | null,
  name?: ModelStringInput | null,
  pendingInvites?: ModelStringInput | null,
  and?: Array< ModelCareGiverFilterInput | null > | null,
  or?: Array< ModelCareGiverFilterInput | null > | null,
  not?: ModelCareGiverFilterInput | null,
  familyCareGiversId?: ModelIDInput | null,
};

export type ModelFamilyFilterInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelFamilyFilterInput | null > | null,
  or?: Array< ModelFamilyFilterInput | null > | null,
  not?: ModelFamilyFilterInput | null,
};

export type ModelFamilyConnection = {
  __typename: "ModelFamilyConnection",
  items:  Array<Family | null >,
  nextToken?: string | null,
};

export type ModelBabyFilterInput = {
  name?: ModelStringInput | null,
  dateOfBirth?: ModelStringInput | null,
  gender?: ModelGenderInput | null,
  and?: Array< ModelBabyFilterInput | null > | null,
  or?: Array< ModelBabyFilterInput | null > | null,
  not?: ModelBabyFilterInput | null,
  familyBabiesId?: ModelIDInput | null,
};

export type ModelFormulaFeedingFilterInput = {
  when?: ModelStringInput | null,
  type?: ModelStringInput | null,
  oz?: ModelIntInput | null,
  nextFeeding?: ModelStringInput | null,
  and?: Array< ModelFormulaFeedingFilterInput | null > | null,
  or?: Array< ModelFormulaFeedingFilterInput | null > | null,
  not?: ModelFormulaFeedingFilterInput | null,
  careGiverFormulaFeedingId?: ModelIDInput | null,
  babyFormulaFeedingId?: ModelIDInput | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type SearchableFormulaFeedingFilterInput = {
  when?: SearchableStringFilterInput | null,
  type?: SearchableStringFilterInput | null,
  oz?: SearchableIntFilterInput | null,
  nextFeeding?: SearchableStringFilterInput | null,
  id?: SearchableIDFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  careGiverFormulaFeedingId?: SearchableIDFilterInput | null,
  babyFormulaFeedingId?: SearchableIDFilterInput | null,
  and?: Array< SearchableFormulaFeedingFilterInput | null > | null,
  or?: Array< SearchableFormulaFeedingFilterInput | null > | null,
  not?: SearchableFormulaFeedingFilterInput | null,
};

export type SearchableStringFilterInput = {
  ne?: string | null,
  gt?: string | null,
  lt?: string | null,
  gte?: string | null,
  lte?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
  range?: Array< string | null > | null,
};

export type SearchableIntFilterInput = {
  ne?: number | null,
  gt?: number | null,
  lt?: number | null,
  gte?: number | null,
  lte?: number | null,
  eq?: number | null,
  range?: Array< number | null > | null,
};

export type SearchableIDFilterInput = {
  ne?: string | null,
  gt?: string | null,
  lt?: string | null,
  gte?: string | null,
  lte?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
  range?: Array< string | null > | null,
};

export type SearchableFormulaFeedingSortInput = {
  field?: SearchableFormulaFeedingSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableFormulaFeedingSortableFields {
  when = "when",
  type = "type",
  oz = "oz",
  nextFeeding = "nextFeeding",
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  careGiverFormulaFeedingId = "careGiverFormulaFeedingId",
  babyFormulaFeedingId = "babyFormulaFeedingId",
}


export enum SearchableSortDirection {
  asc = "asc",
  desc = "desc",
}


export type SearchableFormulaFeedingAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchableFormulaFeedingAggregateField,
};

export enum SearchableAggregateType {
  terms = "terms",
  avg = "avg",
  min = "min",
  max = "max",
  sum = "sum",
}


export enum SearchableFormulaFeedingAggregateField {
  when = "when",
  type = "type",
  oz = "oz",
  nextFeeding = "nextFeeding",
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  careGiverFormulaFeedingId = "careGiverFormulaFeedingId",
  babyFormulaFeedingId = "babyFormulaFeedingId",
}


export type SearchableFormulaFeedingConnection = {
  __typename: "SearchableFormulaFeedingConnection",
  items:  Array<FormulaFeeding | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type SearchableAggregateResult = {
  __typename: "SearchableAggregateResult",
  name: string,
  result?: SearchableAggregateGenericResult | null,
};

export type SearchableAggregateGenericResult = SearchableAggregateScalarResult | SearchableAggregateBucketResult


export type SearchableAggregateScalarResult = {
  __typename: "SearchableAggregateScalarResult",
  value: number,
};

export type SearchableAggregateBucketResult = {
  __typename: "SearchableAggregateBucketResult",
  buckets?:  Array<SearchableAggregateBucketResultItem | null > | null,
};

export type SearchableAggregateBucketResultItem = {
  __typename: "SearchableAggregateBucketResultItem",
  key: string,
  doc_count: number,
};

export type ModelDiaperChangeFilterInput = {
  when?: ModelStringInput | null,
  type?: ModelStringInput | null,
  waste?: ModelWasteInput | null,
  and?: Array< ModelDiaperChangeFilterInput | null > | null,
  or?: Array< ModelDiaperChangeFilterInput | null > | null,
  not?: ModelDiaperChangeFilterInput | null,
  careGiverDiaperChangesId?: ModelIDInput | null,
  babyDiaperChangesId?: ModelIDInput | null,
};

export type SearchableDiaperChangeFilterInput = {
  when?: SearchableStringFilterInput | null,
  type?: SearchableStringFilterInput | null,
  id?: SearchableIDFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  careGiverDiaperChangesId?: SearchableIDFilterInput | null,
  babyDiaperChangesId?: SearchableIDFilterInput | null,
  waste?: SearchableStringFilterInput | null,
  and?: Array< SearchableDiaperChangeFilterInput | null > | null,
  or?: Array< SearchableDiaperChangeFilterInput | null > | null,
  not?: SearchableDiaperChangeFilterInput | null,
};

export type SearchableDiaperChangeSortInput = {
  field?: SearchableDiaperChangeSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableDiaperChangeSortableFields {
  when = "when",
  type = "type",
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  careGiverDiaperChangesId = "careGiverDiaperChangesId",
  babyDiaperChangesId = "babyDiaperChangesId",
}


export type SearchableDiaperChangeAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchableDiaperChangeAggregateField,
};

export enum SearchableDiaperChangeAggregateField {
  when = "when",
  type = "type",
  waste = "waste",
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  careGiverDiaperChangesId = "careGiverDiaperChangesId",
  babyDiaperChangesId = "babyDiaperChangesId",
}


export type SearchableDiaperChangeConnection = {
  __typename: "SearchableDiaperChangeConnection",
  items:  Array<DiaperChange | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type ModelSubscriptionCareGiverFilterInput = {
  userId?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  pendingInvites?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCareGiverFilterInput | null > | null,
  or?: Array< ModelSubscriptionCareGiverFilterInput | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionFamilyFilterInput = {
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionFamilyFilterInput | null > | null,
  or?: Array< ModelSubscriptionFamilyFilterInput | null > | null,
};

export type ModelSubscriptionBabyFilterInput = {
  name?: ModelSubscriptionStringInput | null,
  dateOfBirth?: ModelSubscriptionStringInput | null,
  gender?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBabyFilterInput | null > | null,
  or?: Array< ModelSubscriptionBabyFilterInput | null > | null,
};

export type ModelSubscriptionFormulaFeedingFilterInput = {
  when?: ModelSubscriptionStringInput | null,
  type?: ModelSubscriptionStringInput | null,
  oz?: ModelSubscriptionIntInput | null,
  nextFeeding?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionFormulaFeedingFilterInput | null > | null,
  or?: Array< ModelSubscriptionFormulaFeedingFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionDiaperChangeFilterInput = {
  when?: ModelSubscriptionStringInput | null,
  type?: ModelSubscriptionStringInput | null,
  waste?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionDiaperChangeFilterInput | null > | null,
  or?: Array< ModelSubscriptionDiaperChangeFilterInput | null > | null,
};

export type CreateCareGiverMutationVariables = {
  input: CreateCareGiverInput,
  condition?: ModelCareGiverConditionInput | null,
};

export type CreateCareGiverMutation = {
  createCareGiver?:  {
    __typename: "CareGiver",
    family?:  {
      __typename: "Family",
      careGivers?:  {
        __typename: "ModelCareGiverConnection",
        nextToken?: string | null,
      } | null,
      babies?:  {
        __typename: "ModelBabyConnection",
        nextToken?: string | null,
      } | null,
      name: string,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    userId: string,
    email: string,
    name?: string | null,
    pendingInvites?: Array< string | null > | null,
    formulaFeeding?:  {
      __typename: "ModelFormulaFeedingConnection",
      items:  Array< {
        __typename: "FormulaFeeding",
        when: string,
        type: string,
        oz: number,
        nextFeeding: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        careGiverFormulaFeedingId?: string | null,
        babyFormulaFeedingId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    diaperChanges?:  {
      __typename: "ModelDiaperChangeConnection",
      items:  Array< {
        __typename: "DiaperChange",
        when: string,
        type: string,
        waste: Waste,
        id: string,
        createdAt: string,
        updatedAt: string,
        careGiverDiaperChangesId?: string | null,
        babyDiaperChangesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    familyCareGiversId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateCareGiverMutationVariables = {
  input: UpdateCareGiverInput,
  condition?: ModelCareGiverConditionInput | null,
};

export type UpdateCareGiverMutation = {
  updateCareGiver?:  {
    __typename: "CareGiver",
    family?:  {
      __typename: "Family",
      careGivers?:  {
        __typename: "ModelCareGiverConnection",
        nextToken?: string | null,
      } | null,
      babies?:  {
        __typename: "ModelBabyConnection",
        nextToken?: string | null,
      } | null,
      name: string,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    userId: string,
    email: string,
    name?: string | null,
    pendingInvites?: Array< string | null > | null,
    formulaFeeding?:  {
      __typename: "ModelFormulaFeedingConnection",
      items:  Array< {
        __typename: "FormulaFeeding",
        when: string,
        type: string,
        oz: number,
        nextFeeding: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        careGiverFormulaFeedingId?: string | null,
        babyFormulaFeedingId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    diaperChanges?:  {
      __typename: "ModelDiaperChangeConnection",
      items:  Array< {
        __typename: "DiaperChange",
        when: string,
        type: string,
        waste: Waste,
        id: string,
        createdAt: string,
        updatedAt: string,
        careGiverDiaperChangesId?: string | null,
        babyDiaperChangesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    familyCareGiversId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteCareGiverMutationVariables = {
  input: DeleteCareGiverInput,
  condition?: ModelCareGiverConditionInput | null,
};

export type DeleteCareGiverMutation = {
  deleteCareGiver?:  {
    __typename: "CareGiver",
    family?:  {
      __typename: "Family",
      careGivers?:  {
        __typename: "ModelCareGiverConnection",
        nextToken?: string | null,
      } | null,
      babies?:  {
        __typename: "ModelBabyConnection",
        nextToken?: string | null,
      } | null,
      name: string,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    userId: string,
    email: string,
    name?: string | null,
    pendingInvites?: Array< string | null > | null,
    formulaFeeding?:  {
      __typename: "ModelFormulaFeedingConnection",
      items:  Array< {
        __typename: "FormulaFeeding",
        when: string,
        type: string,
        oz: number,
        nextFeeding: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        careGiverFormulaFeedingId?: string | null,
        babyFormulaFeedingId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    diaperChanges?:  {
      __typename: "ModelDiaperChangeConnection",
      items:  Array< {
        __typename: "DiaperChange",
        when: string,
        type: string,
        waste: Waste,
        id: string,
        createdAt: string,
        updatedAt: string,
        careGiverDiaperChangesId?: string | null,
        babyDiaperChangesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    familyCareGiversId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateFamilyMutationVariables = {
  input: CreateFamilyInput,
  condition?: ModelFamilyConditionInput | null,
};

export type CreateFamilyMutation = {
  createFamily?:  {
    __typename: "Family",
    careGivers?:  {
      __typename: "ModelCareGiverConnection",
      items:  Array< {
        __typename: "CareGiver",
        userId: string,
        email: string,
        name?: string | null,
        pendingInvites?: Array< string | null > | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        familyCareGiversId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    babies?:  {
      __typename: "ModelBabyConnection",
      items:  Array< {
        __typename: "Baby",
        name: string,
        dateOfBirth: string,
        gender: Gender,
        id: string,
        createdAt: string,
        updatedAt: string,
        familyBabiesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    name: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateFamilyMutationVariables = {
  input: UpdateFamilyInput,
  condition?: ModelFamilyConditionInput | null,
};

export type UpdateFamilyMutation = {
  updateFamily?:  {
    __typename: "Family",
    careGivers?:  {
      __typename: "ModelCareGiverConnection",
      items:  Array< {
        __typename: "CareGiver",
        userId: string,
        email: string,
        name?: string | null,
        pendingInvites?: Array< string | null > | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        familyCareGiversId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    babies?:  {
      __typename: "ModelBabyConnection",
      items:  Array< {
        __typename: "Baby",
        name: string,
        dateOfBirth: string,
        gender: Gender,
        id: string,
        createdAt: string,
        updatedAt: string,
        familyBabiesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    name: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteFamilyMutationVariables = {
  input: DeleteFamilyInput,
  condition?: ModelFamilyConditionInput | null,
};

export type DeleteFamilyMutation = {
  deleteFamily?:  {
    __typename: "Family",
    careGivers?:  {
      __typename: "ModelCareGiverConnection",
      items:  Array< {
        __typename: "CareGiver",
        userId: string,
        email: string,
        name?: string | null,
        pendingInvites?: Array< string | null > | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        familyCareGiversId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    babies?:  {
      __typename: "ModelBabyConnection",
      items:  Array< {
        __typename: "Baby",
        name: string,
        dateOfBirth: string,
        gender: Gender,
        id: string,
        createdAt: string,
        updatedAt: string,
        familyBabiesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    name: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateBabyMutationVariables = {
  input: CreateBabyInput,
  condition?: ModelBabyConditionInput | null,
};

export type CreateBabyMutation = {
  createBaby?:  {
    __typename: "Baby",
    name: string,
    dateOfBirth: string,
    gender: Gender,
    family?:  {
      __typename: "Family",
      careGivers?:  {
        __typename: "ModelCareGiverConnection",
        nextToken?: string | null,
      } | null,
      babies?:  {
        __typename: "ModelBabyConnection",
        nextToken?: string | null,
      } | null,
      name: string,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    formulaFeeding?:  {
      __typename: "ModelFormulaFeedingConnection",
      items:  Array< {
        __typename: "FormulaFeeding",
        when: string,
        type: string,
        oz: number,
        nextFeeding: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        careGiverFormulaFeedingId?: string | null,
        babyFormulaFeedingId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    diaperChanges?:  {
      __typename: "ModelDiaperChangeConnection",
      items:  Array< {
        __typename: "DiaperChange",
        when: string,
        type: string,
        waste: Waste,
        id: string,
        createdAt: string,
        updatedAt: string,
        careGiverDiaperChangesId?: string | null,
        babyDiaperChangesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    familyBabiesId?: string | null,
  } | null,
};

export type UpdateBabyMutationVariables = {
  input: UpdateBabyInput,
  condition?: ModelBabyConditionInput | null,
};

export type UpdateBabyMutation = {
  updateBaby?:  {
    __typename: "Baby",
    name: string,
    dateOfBirth: string,
    gender: Gender,
    family?:  {
      __typename: "Family",
      careGivers?:  {
        __typename: "ModelCareGiverConnection",
        nextToken?: string | null,
      } | null,
      babies?:  {
        __typename: "ModelBabyConnection",
        nextToken?: string | null,
      } | null,
      name: string,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    formulaFeeding?:  {
      __typename: "ModelFormulaFeedingConnection",
      items:  Array< {
        __typename: "FormulaFeeding",
        when: string,
        type: string,
        oz: number,
        nextFeeding: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        careGiverFormulaFeedingId?: string | null,
        babyFormulaFeedingId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    diaperChanges?:  {
      __typename: "ModelDiaperChangeConnection",
      items:  Array< {
        __typename: "DiaperChange",
        when: string,
        type: string,
        waste: Waste,
        id: string,
        createdAt: string,
        updatedAt: string,
        careGiverDiaperChangesId?: string | null,
        babyDiaperChangesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    familyBabiesId?: string | null,
  } | null,
};

export type DeleteBabyMutationVariables = {
  input: DeleteBabyInput,
  condition?: ModelBabyConditionInput | null,
};

export type DeleteBabyMutation = {
  deleteBaby?:  {
    __typename: "Baby",
    name: string,
    dateOfBirth: string,
    gender: Gender,
    family?:  {
      __typename: "Family",
      careGivers?:  {
        __typename: "ModelCareGiverConnection",
        nextToken?: string | null,
      } | null,
      babies?:  {
        __typename: "ModelBabyConnection",
        nextToken?: string | null,
      } | null,
      name: string,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    formulaFeeding?:  {
      __typename: "ModelFormulaFeedingConnection",
      items:  Array< {
        __typename: "FormulaFeeding",
        when: string,
        type: string,
        oz: number,
        nextFeeding: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        careGiverFormulaFeedingId?: string | null,
        babyFormulaFeedingId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    diaperChanges?:  {
      __typename: "ModelDiaperChangeConnection",
      items:  Array< {
        __typename: "DiaperChange",
        when: string,
        type: string,
        waste: Waste,
        id: string,
        createdAt: string,
        updatedAt: string,
        careGiverDiaperChangesId?: string | null,
        babyDiaperChangesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    familyBabiesId?: string | null,
  } | null,
};

export type CreateFormulaFeedingMutationVariables = {
  input: CreateFormulaFeedingInput,
  condition?: ModelFormulaFeedingConditionInput | null,
};

export type CreateFormulaFeedingMutation = {
  createFormulaFeeding?:  {
    __typename: "FormulaFeeding",
    by:  {
      __typename: "CareGiver",
      family?:  {
        __typename: "Family",
        name: string,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      userId: string,
      email: string,
      name?: string | null,
      pendingInvites?: Array< string | null > | null,
      formulaFeeding?:  {
        __typename: "ModelFormulaFeedingConnection",
        nextToken?: string | null,
      } | null,
      diaperChanges?:  {
        __typename: "ModelDiaperChangeConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      familyCareGiversId?: string | null,
      owner?: string | null,
    },
    when: string,
    for:  {
      __typename: "Baby",
      name: string,
      dateOfBirth: string,
      gender: Gender,
      family?:  {
        __typename: "Family",
        name: string,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      formulaFeeding?:  {
        __typename: "ModelFormulaFeedingConnection",
        nextToken?: string | null,
      } | null,
      diaperChanges?:  {
        __typename: "ModelDiaperChangeConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      familyBabiesId?: string | null,
    },
    type: string,
    oz: number,
    nextFeeding: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    careGiverFormulaFeedingId?: string | null,
    babyFormulaFeedingId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateFormulaFeedingMutationVariables = {
  input: UpdateFormulaFeedingInput,
  condition?: ModelFormulaFeedingConditionInput | null,
};

export type UpdateFormulaFeedingMutation = {
  updateFormulaFeeding?:  {
    __typename: "FormulaFeeding",
    by:  {
      __typename: "CareGiver",
      family?:  {
        __typename: "Family",
        name: string,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      userId: string,
      email: string,
      name?: string | null,
      pendingInvites?: Array< string | null > | null,
      formulaFeeding?:  {
        __typename: "ModelFormulaFeedingConnection",
        nextToken?: string | null,
      } | null,
      diaperChanges?:  {
        __typename: "ModelDiaperChangeConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      familyCareGiversId?: string | null,
      owner?: string | null,
    },
    when: string,
    for:  {
      __typename: "Baby",
      name: string,
      dateOfBirth: string,
      gender: Gender,
      family?:  {
        __typename: "Family",
        name: string,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      formulaFeeding?:  {
        __typename: "ModelFormulaFeedingConnection",
        nextToken?: string | null,
      } | null,
      diaperChanges?:  {
        __typename: "ModelDiaperChangeConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      familyBabiesId?: string | null,
    },
    type: string,
    oz: number,
    nextFeeding: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    careGiverFormulaFeedingId?: string | null,
    babyFormulaFeedingId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteFormulaFeedingMutationVariables = {
  input: DeleteFormulaFeedingInput,
  condition?: ModelFormulaFeedingConditionInput | null,
};

export type DeleteFormulaFeedingMutation = {
  deleteFormulaFeeding?:  {
    __typename: "FormulaFeeding",
    by:  {
      __typename: "CareGiver",
      family?:  {
        __typename: "Family",
        name: string,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      userId: string,
      email: string,
      name?: string | null,
      pendingInvites?: Array< string | null > | null,
      formulaFeeding?:  {
        __typename: "ModelFormulaFeedingConnection",
        nextToken?: string | null,
      } | null,
      diaperChanges?:  {
        __typename: "ModelDiaperChangeConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      familyCareGiversId?: string | null,
      owner?: string | null,
    },
    when: string,
    for:  {
      __typename: "Baby",
      name: string,
      dateOfBirth: string,
      gender: Gender,
      family?:  {
        __typename: "Family",
        name: string,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      formulaFeeding?:  {
        __typename: "ModelFormulaFeedingConnection",
        nextToken?: string | null,
      } | null,
      diaperChanges?:  {
        __typename: "ModelDiaperChangeConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      familyBabiesId?: string | null,
    },
    type: string,
    oz: number,
    nextFeeding: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    careGiverFormulaFeedingId?: string | null,
    babyFormulaFeedingId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateDiaperChangeMutationVariables = {
  input: CreateDiaperChangeInput,
  condition?: ModelDiaperChangeConditionInput | null,
};

export type CreateDiaperChangeMutation = {
  createDiaperChange?:  {
    __typename: "DiaperChange",
    by:  {
      __typename: "CareGiver",
      family?:  {
        __typename: "Family",
        name: string,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      userId: string,
      email: string,
      name?: string | null,
      pendingInvites?: Array< string | null > | null,
      formulaFeeding?:  {
        __typename: "ModelFormulaFeedingConnection",
        nextToken?: string | null,
      } | null,
      diaperChanges?:  {
        __typename: "ModelDiaperChangeConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      familyCareGiversId?: string | null,
      owner?: string | null,
    },
    when: string,
    for:  {
      __typename: "Baby",
      name: string,
      dateOfBirth: string,
      gender: Gender,
      family?:  {
        __typename: "Family",
        name: string,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      formulaFeeding?:  {
        __typename: "ModelFormulaFeedingConnection",
        nextToken?: string | null,
      } | null,
      diaperChanges?:  {
        __typename: "ModelDiaperChangeConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      familyBabiesId?: string | null,
    },
    type: string,
    waste: Waste,
    id: string,
    createdAt: string,
    updatedAt: string,
    careGiverDiaperChangesId?: string | null,
    babyDiaperChangesId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateDiaperChangeMutationVariables = {
  input: UpdateDiaperChangeInput,
  condition?: ModelDiaperChangeConditionInput | null,
};

export type UpdateDiaperChangeMutation = {
  updateDiaperChange?:  {
    __typename: "DiaperChange",
    by:  {
      __typename: "CareGiver",
      family?:  {
        __typename: "Family",
        name: string,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      userId: string,
      email: string,
      name?: string | null,
      pendingInvites?: Array< string | null > | null,
      formulaFeeding?:  {
        __typename: "ModelFormulaFeedingConnection",
        nextToken?: string | null,
      } | null,
      diaperChanges?:  {
        __typename: "ModelDiaperChangeConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      familyCareGiversId?: string | null,
      owner?: string | null,
    },
    when: string,
    for:  {
      __typename: "Baby",
      name: string,
      dateOfBirth: string,
      gender: Gender,
      family?:  {
        __typename: "Family",
        name: string,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      formulaFeeding?:  {
        __typename: "ModelFormulaFeedingConnection",
        nextToken?: string | null,
      } | null,
      diaperChanges?:  {
        __typename: "ModelDiaperChangeConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      familyBabiesId?: string | null,
    },
    type: string,
    waste: Waste,
    id: string,
    createdAt: string,
    updatedAt: string,
    careGiverDiaperChangesId?: string | null,
    babyDiaperChangesId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteDiaperChangeMutationVariables = {
  input: DeleteDiaperChangeInput,
  condition?: ModelDiaperChangeConditionInput | null,
};

export type DeleteDiaperChangeMutation = {
  deleteDiaperChange?:  {
    __typename: "DiaperChange",
    by:  {
      __typename: "CareGiver",
      family?:  {
        __typename: "Family",
        name: string,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      userId: string,
      email: string,
      name?: string | null,
      pendingInvites?: Array< string | null > | null,
      formulaFeeding?:  {
        __typename: "ModelFormulaFeedingConnection",
        nextToken?: string | null,
      } | null,
      diaperChanges?:  {
        __typename: "ModelDiaperChangeConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      familyCareGiversId?: string | null,
      owner?: string | null,
    },
    when: string,
    for:  {
      __typename: "Baby",
      name: string,
      dateOfBirth: string,
      gender: Gender,
      family?:  {
        __typename: "Family",
        name: string,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      formulaFeeding?:  {
        __typename: "ModelFormulaFeedingConnection",
        nextToken?: string | null,
      } | null,
      diaperChanges?:  {
        __typename: "ModelDiaperChangeConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      familyBabiesId?: string | null,
    },
    type: string,
    waste: Waste,
    id: string,
    createdAt: string,
    updatedAt: string,
    careGiverDiaperChangesId?: string | null,
    babyDiaperChangesId?: string | null,
    owner?: string | null,
  } | null,
};

export type GetCareGiverQueryVariables = {
  id: string,
};

export type GetCareGiverQuery = {
  getCareGiver?:  {
    __typename: "CareGiver",
    family?:  {
      __typename: "Family",
      careGivers?:  {
        __typename: "ModelCareGiverConnection",
        nextToken?: string | null,
      } | null,
      babies?:  {
        __typename: "ModelBabyConnection",
        nextToken?: string | null,
      } | null,
      name: string,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    userId: string,
    email: string,
    name?: string | null,
    pendingInvites?: Array< string | null > | null,
    formulaFeeding?:  {
      __typename: "ModelFormulaFeedingConnection",
      items:  Array< {
        __typename: "FormulaFeeding",
        when: string,
        type: string,
        oz: number,
        nextFeeding: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        careGiverFormulaFeedingId?: string | null,
        babyFormulaFeedingId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    diaperChanges?:  {
      __typename: "ModelDiaperChangeConnection",
      items:  Array< {
        __typename: "DiaperChange",
        when: string,
        type: string,
        waste: Waste,
        id: string,
        createdAt: string,
        updatedAt: string,
        careGiverDiaperChangesId?: string | null,
        babyDiaperChangesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    familyCareGiversId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListCareGiversQueryVariables = {
  filter?: ModelCareGiverFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCareGiversQuery = {
  listCareGivers?:  {
    __typename: "ModelCareGiverConnection",
    items:  Array< {
      __typename: "CareGiver",
      family?:  {
        __typename: "Family",
        name: string,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      userId: string,
      email: string,
      name?: string | null,
      pendingInvites?: Array< string | null > | null,
      formulaFeeding?:  {
        __typename: "ModelFormulaFeedingConnection",
        nextToken?: string | null,
      } | null,
      diaperChanges?:  {
        __typename: "ModelDiaperChangeConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      familyCareGiversId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetFamilyQueryVariables = {
  id: string,
};

export type GetFamilyQuery = {
  getFamily?:  {
    __typename: "Family",
    careGivers?:  {
      __typename: "ModelCareGiverConnection",
      items:  Array< {
        __typename: "CareGiver",
        userId: string,
        email: string,
        name?: string | null,
        pendingInvites?: Array< string | null > | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        familyCareGiversId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    babies?:  {
      __typename: "ModelBabyConnection",
      items:  Array< {
        __typename: "Baby",
        name: string,
        dateOfBirth: string,
        gender: Gender,
        id: string,
        createdAt: string,
        updatedAt: string,
        familyBabiesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    name: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListFamiliesQueryVariables = {
  filter?: ModelFamilyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFamiliesQuery = {
  listFamilies?:  {
    __typename: "ModelFamilyConnection",
    items:  Array< {
      __typename: "Family",
      careGivers?:  {
        __typename: "ModelCareGiverConnection",
        nextToken?: string | null,
      } | null,
      babies?:  {
        __typename: "ModelBabyConnection",
        nextToken?: string | null,
      } | null,
      name: string,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBabyQueryVariables = {
  id: string,
};

export type GetBabyQuery = {
  getBaby?:  {
    __typename: "Baby",
    name: string,
    dateOfBirth: string,
    gender: Gender,
    family?:  {
      __typename: "Family",
      careGivers?:  {
        __typename: "ModelCareGiverConnection",
        nextToken?: string | null,
      } | null,
      babies?:  {
        __typename: "ModelBabyConnection",
        nextToken?: string | null,
      } | null,
      name: string,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    formulaFeeding?:  {
      __typename: "ModelFormulaFeedingConnection",
      items:  Array< {
        __typename: "FormulaFeeding",
        when: string,
        type: string,
        oz: number,
        nextFeeding: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        careGiverFormulaFeedingId?: string | null,
        babyFormulaFeedingId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    diaperChanges?:  {
      __typename: "ModelDiaperChangeConnection",
      items:  Array< {
        __typename: "DiaperChange",
        when: string,
        type: string,
        waste: Waste,
        id: string,
        createdAt: string,
        updatedAt: string,
        careGiverDiaperChangesId?: string | null,
        babyDiaperChangesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    familyBabiesId?: string | null,
  } | null,
};

export type ListBabiesQueryVariables = {
  filter?: ModelBabyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBabiesQuery = {
  listBabies?:  {
    __typename: "ModelBabyConnection",
    items:  Array< {
      __typename: "Baby",
      name: string,
      dateOfBirth: string,
      gender: Gender,
      family?:  {
        __typename: "Family",
        name: string,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      formulaFeeding?:  {
        __typename: "ModelFormulaFeedingConnection",
        nextToken?: string | null,
      } | null,
      diaperChanges?:  {
        __typename: "ModelDiaperChangeConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      familyBabiesId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetFormulaFeedingQueryVariables = {
  id: string,
};

export type GetFormulaFeedingQuery = {
  getFormulaFeeding?:  {
    __typename: "FormulaFeeding",
    by:  {
      __typename: "CareGiver",
      family?:  {
        __typename: "Family",
        name: string,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      userId: string,
      email: string,
      name?: string | null,
      pendingInvites?: Array< string | null > | null,
      formulaFeeding?:  {
        __typename: "ModelFormulaFeedingConnection",
        nextToken?: string | null,
      } | null,
      diaperChanges?:  {
        __typename: "ModelDiaperChangeConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      familyCareGiversId?: string | null,
      owner?: string | null,
    },
    when: string,
    for:  {
      __typename: "Baby",
      name: string,
      dateOfBirth: string,
      gender: Gender,
      family?:  {
        __typename: "Family",
        name: string,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      formulaFeeding?:  {
        __typename: "ModelFormulaFeedingConnection",
        nextToken?: string | null,
      } | null,
      diaperChanges?:  {
        __typename: "ModelDiaperChangeConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      familyBabiesId?: string | null,
    },
    type: string,
    oz: number,
    nextFeeding: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    careGiverFormulaFeedingId?: string | null,
    babyFormulaFeedingId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListFormulaFeedingsQueryVariables = {
  filter?: ModelFormulaFeedingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFormulaFeedingsQuery = {
  listFormulaFeedings?:  {
    __typename: "ModelFormulaFeedingConnection",
    items:  Array< {
      __typename: "FormulaFeeding",
      by:  {
        __typename: "CareGiver",
        userId: string,
        email: string,
        name?: string | null,
        pendingInvites?: Array< string | null > | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        familyCareGiversId?: string | null,
        owner?: string | null,
      },
      when: string,
      for:  {
        __typename: "Baby",
        name: string,
        dateOfBirth: string,
        gender: Gender,
        id: string,
        createdAt: string,
        updatedAt: string,
        familyBabiesId?: string | null,
      },
      type: string,
      oz: number,
      nextFeeding: string,
      id: string,
      createdAt: string,
      updatedAt: string,
      careGiverFormulaFeedingId?: string | null,
      babyFormulaFeedingId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ByFeedingDateQueryVariables = {
  type: string,
  when?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelFormulaFeedingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ByFeedingDateQuery = {
  byFeedingDate?:  {
    __typename: "ModelFormulaFeedingConnection",
    items:  Array< {
      __typename: "FormulaFeeding",
      by:  {
        __typename: "CareGiver",
        userId: string,
        email: string,
        name?: string | null,
        pendingInvites?: Array< string | null > | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        familyCareGiversId?: string | null,
        owner?: string | null,
      },
      when: string,
      for:  {
        __typename: "Baby",
        name: string,
        dateOfBirth: string,
        gender: Gender,
        id: string,
        createdAt: string,
        updatedAt: string,
        familyBabiesId?: string | null,
      },
      type: string,
      oz: number,
      nextFeeding: string,
      id: string,
      createdAt: string,
      updatedAt: string,
      careGiverFormulaFeedingId?: string | null,
      babyFormulaFeedingId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SearchFormulaFeedingsQueryVariables = {
  filter?: SearchableFormulaFeedingFilterInput | null,
  sort?: Array< SearchableFormulaFeedingSortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchableFormulaFeedingAggregationInput | null > | null,
};

export type SearchFormulaFeedingsQuery = {
  searchFormulaFeedings?:  {
    __typename: "SearchableFormulaFeedingConnection",
    items:  Array< {
      __typename: "FormulaFeeding",
      by:  {
        __typename: "CareGiver",
        userId: string,
        email: string,
        name?: string | null,
        pendingInvites?: Array< string | null > | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        familyCareGiversId?: string | null,
        owner?: string | null,
      },
      when: string,
      for:  {
        __typename: "Baby",
        name: string,
        dateOfBirth: string,
        gender: Gender,
        id: string,
        createdAt: string,
        updatedAt: string,
        familyBabiesId?: string | null,
      },
      type: string,
      oz: number,
      nextFeeding: string,
      id: string,
      createdAt: string,
      updatedAt: string,
      careGiverFormulaFeedingId?: string | null,
      babyFormulaFeedingId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } | null >,
  } | null,
};

export type GetDiaperChangeQueryVariables = {
  id: string,
};

export type GetDiaperChangeQuery = {
  getDiaperChange?:  {
    __typename: "DiaperChange",
    by:  {
      __typename: "CareGiver",
      family?:  {
        __typename: "Family",
        name: string,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      userId: string,
      email: string,
      name?: string | null,
      pendingInvites?: Array< string | null > | null,
      formulaFeeding?:  {
        __typename: "ModelFormulaFeedingConnection",
        nextToken?: string | null,
      } | null,
      diaperChanges?:  {
        __typename: "ModelDiaperChangeConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      familyCareGiversId?: string | null,
      owner?: string | null,
    },
    when: string,
    for:  {
      __typename: "Baby",
      name: string,
      dateOfBirth: string,
      gender: Gender,
      family?:  {
        __typename: "Family",
        name: string,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      formulaFeeding?:  {
        __typename: "ModelFormulaFeedingConnection",
        nextToken?: string | null,
      } | null,
      diaperChanges?:  {
        __typename: "ModelDiaperChangeConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      familyBabiesId?: string | null,
    },
    type: string,
    waste: Waste,
    id: string,
    createdAt: string,
    updatedAt: string,
    careGiverDiaperChangesId?: string | null,
    babyDiaperChangesId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListDiaperChangesQueryVariables = {
  filter?: ModelDiaperChangeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDiaperChangesQuery = {
  listDiaperChanges?:  {
    __typename: "ModelDiaperChangeConnection",
    items:  Array< {
      __typename: "DiaperChange",
      by:  {
        __typename: "CareGiver",
        userId: string,
        email: string,
        name?: string | null,
        pendingInvites?: Array< string | null > | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        familyCareGiversId?: string | null,
        owner?: string | null,
      },
      when: string,
      for:  {
        __typename: "Baby",
        name: string,
        dateOfBirth: string,
        gender: Gender,
        id: string,
        createdAt: string,
        updatedAt: string,
        familyBabiesId?: string | null,
      },
      type: string,
      waste: Waste,
      id: string,
      createdAt: string,
      updatedAt: string,
      careGiverDiaperChangesId?: string | null,
      babyDiaperChangesId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ByDiaperChangeDateQueryVariables = {
  type: string,
  when?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelDiaperChangeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ByDiaperChangeDateQuery = {
  byDiaperChangeDate?:  {
    __typename: "ModelDiaperChangeConnection",
    items:  Array< {
      __typename: "DiaperChange",
      by:  {
        __typename: "CareGiver",
        userId: string,
        email: string,
        name?: string | null,
        pendingInvites?: Array< string | null > | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        familyCareGiversId?: string | null,
        owner?: string | null,
      },
      when: string,
      for:  {
        __typename: "Baby",
        name: string,
        dateOfBirth: string,
        gender: Gender,
        id: string,
        createdAt: string,
        updatedAt: string,
        familyBabiesId?: string | null,
      },
      type: string,
      waste: Waste,
      id: string,
      createdAt: string,
      updatedAt: string,
      careGiverDiaperChangesId?: string | null,
      babyDiaperChangesId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SearchDiaperChangesQueryVariables = {
  filter?: SearchableDiaperChangeFilterInput | null,
  sort?: Array< SearchableDiaperChangeSortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchableDiaperChangeAggregationInput | null > | null,
};

export type SearchDiaperChangesQuery = {
  searchDiaperChanges?:  {
    __typename: "SearchableDiaperChangeConnection",
    items:  Array< {
      __typename: "DiaperChange",
      by:  {
        __typename: "CareGiver",
        userId: string,
        email: string,
        name?: string | null,
        pendingInvites?: Array< string | null > | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        familyCareGiversId?: string | null,
        owner?: string | null,
      },
      when: string,
      for:  {
        __typename: "Baby",
        name: string,
        dateOfBirth: string,
        gender: Gender,
        id: string,
        createdAt: string,
        updatedAt: string,
        familyBabiesId?: string | null,
      },
      type: string,
      waste: Waste,
      id: string,
      createdAt: string,
      updatedAt: string,
      careGiverDiaperChangesId?: string | null,
      babyDiaperChangesId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } | null >,
  } | null,
};

export type OnCreateCareGiverSubscriptionVariables = {
  filter?: ModelSubscriptionCareGiverFilterInput | null,
  owner?: string | null,
};

export type OnCreateCareGiverSubscription = {
  onCreateCareGiver?:  {
    __typename: "CareGiver",
    family?:  {
      __typename: "Family",
      careGivers?:  {
        __typename: "ModelCareGiverConnection",
        nextToken?: string | null,
      } | null,
      babies?:  {
        __typename: "ModelBabyConnection",
        nextToken?: string | null,
      } | null,
      name: string,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    userId: string,
    email: string,
    name?: string | null,
    pendingInvites?: Array< string | null > | null,
    formulaFeeding?:  {
      __typename: "ModelFormulaFeedingConnection",
      items:  Array< {
        __typename: "FormulaFeeding",
        when: string,
        type: string,
        oz: number,
        nextFeeding: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        careGiverFormulaFeedingId?: string | null,
        babyFormulaFeedingId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    diaperChanges?:  {
      __typename: "ModelDiaperChangeConnection",
      items:  Array< {
        __typename: "DiaperChange",
        when: string,
        type: string,
        waste: Waste,
        id: string,
        createdAt: string,
        updatedAt: string,
        careGiverDiaperChangesId?: string | null,
        babyDiaperChangesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    familyCareGiversId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateCareGiverSubscriptionVariables = {
  filter?: ModelSubscriptionCareGiverFilterInput | null,
  owner?: string | null,
};

export type OnUpdateCareGiverSubscription = {
  onUpdateCareGiver?:  {
    __typename: "CareGiver",
    family?:  {
      __typename: "Family",
      careGivers?:  {
        __typename: "ModelCareGiverConnection",
        nextToken?: string | null,
      } | null,
      babies?:  {
        __typename: "ModelBabyConnection",
        nextToken?: string | null,
      } | null,
      name: string,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    userId: string,
    email: string,
    name?: string | null,
    pendingInvites?: Array< string | null > | null,
    formulaFeeding?:  {
      __typename: "ModelFormulaFeedingConnection",
      items:  Array< {
        __typename: "FormulaFeeding",
        when: string,
        type: string,
        oz: number,
        nextFeeding: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        careGiverFormulaFeedingId?: string | null,
        babyFormulaFeedingId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    diaperChanges?:  {
      __typename: "ModelDiaperChangeConnection",
      items:  Array< {
        __typename: "DiaperChange",
        when: string,
        type: string,
        waste: Waste,
        id: string,
        createdAt: string,
        updatedAt: string,
        careGiverDiaperChangesId?: string | null,
        babyDiaperChangesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    familyCareGiversId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteCareGiverSubscriptionVariables = {
  filter?: ModelSubscriptionCareGiverFilterInput | null,
  owner?: string | null,
};

export type OnDeleteCareGiverSubscription = {
  onDeleteCareGiver?:  {
    __typename: "CareGiver",
    family?:  {
      __typename: "Family",
      careGivers?:  {
        __typename: "ModelCareGiverConnection",
        nextToken?: string | null,
      } | null,
      babies?:  {
        __typename: "ModelBabyConnection",
        nextToken?: string | null,
      } | null,
      name: string,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    userId: string,
    email: string,
    name?: string | null,
    pendingInvites?: Array< string | null > | null,
    formulaFeeding?:  {
      __typename: "ModelFormulaFeedingConnection",
      items:  Array< {
        __typename: "FormulaFeeding",
        when: string,
        type: string,
        oz: number,
        nextFeeding: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        careGiverFormulaFeedingId?: string | null,
        babyFormulaFeedingId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    diaperChanges?:  {
      __typename: "ModelDiaperChangeConnection",
      items:  Array< {
        __typename: "DiaperChange",
        when: string,
        type: string,
        waste: Waste,
        id: string,
        createdAt: string,
        updatedAt: string,
        careGiverDiaperChangesId?: string | null,
        babyDiaperChangesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    familyCareGiversId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateFamilySubscriptionVariables = {
  filter?: ModelSubscriptionFamilyFilterInput | null,
};

export type OnCreateFamilySubscription = {
  onCreateFamily?:  {
    __typename: "Family",
    careGivers?:  {
      __typename: "ModelCareGiverConnection",
      items:  Array< {
        __typename: "CareGiver",
        userId: string,
        email: string,
        name?: string | null,
        pendingInvites?: Array< string | null > | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        familyCareGiversId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    babies?:  {
      __typename: "ModelBabyConnection",
      items:  Array< {
        __typename: "Baby",
        name: string,
        dateOfBirth: string,
        gender: Gender,
        id: string,
        createdAt: string,
        updatedAt: string,
        familyBabiesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    name: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateFamilySubscriptionVariables = {
  filter?: ModelSubscriptionFamilyFilterInput | null,
};

export type OnUpdateFamilySubscription = {
  onUpdateFamily?:  {
    __typename: "Family",
    careGivers?:  {
      __typename: "ModelCareGiverConnection",
      items:  Array< {
        __typename: "CareGiver",
        userId: string,
        email: string,
        name?: string | null,
        pendingInvites?: Array< string | null > | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        familyCareGiversId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    babies?:  {
      __typename: "ModelBabyConnection",
      items:  Array< {
        __typename: "Baby",
        name: string,
        dateOfBirth: string,
        gender: Gender,
        id: string,
        createdAt: string,
        updatedAt: string,
        familyBabiesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    name: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteFamilySubscriptionVariables = {
  filter?: ModelSubscriptionFamilyFilterInput | null,
};

export type OnDeleteFamilySubscription = {
  onDeleteFamily?:  {
    __typename: "Family",
    careGivers?:  {
      __typename: "ModelCareGiverConnection",
      items:  Array< {
        __typename: "CareGiver",
        userId: string,
        email: string,
        name?: string | null,
        pendingInvites?: Array< string | null > | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        familyCareGiversId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    babies?:  {
      __typename: "ModelBabyConnection",
      items:  Array< {
        __typename: "Baby",
        name: string,
        dateOfBirth: string,
        gender: Gender,
        id: string,
        createdAt: string,
        updatedAt: string,
        familyBabiesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    name: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateBabySubscriptionVariables = {
  filter?: ModelSubscriptionBabyFilterInput | null,
};

export type OnCreateBabySubscription = {
  onCreateBaby?:  {
    __typename: "Baby",
    name: string,
    dateOfBirth: string,
    gender: Gender,
    family?:  {
      __typename: "Family",
      careGivers?:  {
        __typename: "ModelCareGiverConnection",
        nextToken?: string | null,
      } | null,
      babies?:  {
        __typename: "ModelBabyConnection",
        nextToken?: string | null,
      } | null,
      name: string,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    formulaFeeding?:  {
      __typename: "ModelFormulaFeedingConnection",
      items:  Array< {
        __typename: "FormulaFeeding",
        when: string,
        type: string,
        oz: number,
        nextFeeding: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        careGiverFormulaFeedingId?: string | null,
        babyFormulaFeedingId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    diaperChanges?:  {
      __typename: "ModelDiaperChangeConnection",
      items:  Array< {
        __typename: "DiaperChange",
        when: string,
        type: string,
        waste: Waste,
        id: string,
        createdAt: string,
        updatedAt: string,
        careGiverDiaperChangesId?: string | null,
        babyDiaperChangesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    familyBabiesId?: string | null,
  } | null,
};

export type OnUpdateBabySubscriptionVariables = {
  filter?: ModelSubscriptionBabyFilterInput | null,
};

export type OnUpdateBabySubscription = {
  onUpdateBaby?:  {
    __typename: "Baby",
    name: string,
    dateOfBirth: string,
    gender: Gender,
    family?:  {
      __typename: "Family",
      careGivers?:  {
        __typename: "ModelCareGiverConnection",
        nextToken?: string | null,
      } | null,
      babies?:  {
        __typename: "ModelBabyConnection",
        nextToken?: string | null,
      } | null,
      name: string,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    formulaFeeding?:  {
      __typename: "ModelFormulaFeedingConnection",
      items:  Array< {
        __typename: "FormulaFeeding",
        when: string,
        type: string,
        oz: number,
        nextFeeding: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        careGiverFormulaFeedingId?: string | null,
        babyFormulaFeedingId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    diaperChanges?:  {
      __typename: "ModelDiaperChangeConnection",
      items:  Array< {
        __typename: "DiaperChange",
        when: string,
        type: string,
        waste: Waste,
        id: string,
        createdAt: string,
        updatedAt: string,
        careGiverDiaperChangesId?: string | null,
        babyDiaperChangesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    familyBabiesId?: string | null,
  } | null,
};

export type OnDeleteBabySubscriptionVariables = {
  filter?: ModelSubscriptionBabyFilterInput | null,
};

export type OnDeleteBabySubscription = {
  onDeleteBaby?:  {
    __typename: "Baby",
    name: string,
    dateOfBirth: string,
    gender: Gender,
    family?:  {
      __typename: "Family",
      careGivers?:  {
        __typename: "ModelCareGiverConnection",
        nextToken?: string | null,
      } | null,
      babies?:  {
        __typename: "ModelBabyConnection",
        nextToken?: string | null,
      } | null,
      name: string,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    formulaFeeding?:  {
      __typename: "ModelFormulaFeedingConnection",
      items:  Array< {
        __typename: "FormulaFeeding",
        when: string,
        type: string,
        oz: number,
        nextFeeding: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        careGiverFormulaFeedingId?: string | null,
        babyFormulaFeedingId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    diaperChanges?:  {
      __typename: "ModelDiaperChangeConnection",
      items:  Array< {
        __typename: "DiaperChange",
        when: string,
        type: string,
        waste: Waste,
        id: string,
        createdAt: string,
        updatedAt: string,
        careGiverDiaperChangesId?: string | null,
        babyDiaperChangesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    familyBabiesId?: string | null,
  } | null,
};

export type OnCreateFormulaFeedingSubscriptionVariables = {
  filter?: ModelSubscriptionFormulaFeedingFilterInput | null,
  owner?: string | null,
};

export type OnCreateFormulaFeedingSubscription = {
  onCreateFormulaFeeding?:  {
    __typename: "FormulaFeeding",
    by:  {
      __typename: "CareGiver",
      family?:  {
        __typename: "Family",
        name: string,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      userId: string,
      email: string,
      name?: string | null,
      pendingInvites?: Array< string | null > | null,
      formulaFeeding?:  {
        __typename: "ModelFormulaFeedingConnection",
        nextToken?: string | null,
      } | null,
      diaperChanges?:  {
        __typename: "ModelDiaperChangeConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      familyCareGiversId?: string | null,
      owner?: string | null,
    },
    when: string,
    for:  {
      __typename: "Baby",
      name: string,
      dateOfBirth: string,
      gender: Gender,
      family?:  {
        __typename: "Family",
        name: string,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      formulaFeeding?:  {
        __typename: "ModelFormulaFeedingConnection",
        nextToken?: string | null,
      } | null,
      diaperChanges?:  {
        __typename: "ModelDiaperChangeConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      familyBabiesId?: string | null,
    },
    type: string,
    oz: number,
    nextFeeding: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    careGiverFormulaFeedingId?: string | null,
    babyFormulaFeedingId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateFormulaFeedingSubscriptionVariables = {
  filter?: ModelSubscriptionFormulaFeedingFilterInput | null,
  owner?: string | null,
};

export type OnUpdateFormulaFeedingSubscription = {
  onUpdateFormulaFeeding?:  {
    __typename: "FormulaFeeding",
    by:  {
      __typename: "CareGiver",
      family?:  {
        __typename: "Family",
        name: string,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      userId: string,
      email: string,
      name?: string | null,
      pendingInvites?: Array< string | null > | null,
      formulaFeeding?:  {
        __typename: "ModelFormulaFeedingConnection",
        nextToken?: string | null,
      } | null,
      diaperChanges?:  {
        __typename: "ModelDiaperChangeConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      familyCareGiversId?: string | null,
      owner?: string | null,
    },
    when: string,
    for:  {
      __typename: "Baby",
      name: string,
      dateOfBirth: string,
      gender: Gender,
      family?:  {
        __typename: "Family",
        name: string,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      formulaFeeding?:  {
        __typename: "ModelFormulaFeedingConnection",
        nextToken?: string | null,
      } | null,
      diaperChanges?:  {
        __typename: "ModelDiaperChangeConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      familyBabiesId?: string | null,
    },
    type: string,
    oz: number,
    nextFeeding: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    careGiverFormulaFeedingId?: string | null,
    babyFormulaFeedingId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteFormulaFeedingSubscriptionVariables = {
  filter?: ModelSubscriptionFormulaFeedingFilterInput | null,
  owner?: string | null,
};

export type OnDeleteFormulaFeedingSubscription = {
  onDeleteFormulaFeeding?:  {
    __typename: "FormulaFeeding",
    by:  {
      __typename: "CareGiver",
      family?:  {
        __typename: "Family",
        name: string,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      userId: string,
      email: string,
      name?: string | null,
      pendingInvites?: Array< string | null > | null,
      formulaFeeding?:  {
        __typename: "ModelFormulaFeedingConnection",
        nextToken?: string | null,
      } | null,
      diaperChanges?:  {
        __typename: "ModelDiaperChangeConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      familyCareGiversId?: string | null,
      owner?: string | null,
    },
    when: string,
    for:  {
      __typename: "Baby",
      name: string,
      dateOfBirth: string,
      gender: Gender,
      family?:  {
        __typename: "Family",
        name: string,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      formulaFeeding?:  {
        __typename: "ModelFormulaFeedingConnection",
        nextToken?: string | null,
      } | null,
      diaperChanges?:  {
        __typename: "ModelDiaperChangeConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      familyBabiesId?: string | null,
    },
    type: string,
    oz: number,
    nextFeeding: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    careGiverFormulaFeedingId?: string | null,
    babyFormulaFeedingId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateDiaperChangeSubscriptionVariables = {
  filter?: ModelSubscriptionDiaperChangeFilterInput | null,
  owner?: string | null,
};

export type OnCreateDiaperChangeSubscription = {
  onCreateDiaperChange?:  {
    __typename: "DiaperChange",
    by:  {
      __typename: "CareGiver",
      family?:  {
        __typename: "Family",
        name: string,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      userId: string,
      email: string,
      name?: string | null,
      pendingInvites?: Array< string | null > | null,
      formulaFeeding?:  {
        __typename: "ModelFormulaFeedingConnection",
        nextToken?: string | null,
      } | null,
      diaperChanges?:  {
        __typename: "ModelDiaperChangeConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      familyCareGiversId?: string | null,
      owner?: string | null,
    },
    when: string,
    for:  {
      __typename: "Baby",
      name: string,
      dateOfBirth: string,
      gender: Gender,
      family?:  {
        __typename: "Family",
        name: string,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      formulaFeeding?:  {
        __typename: "ModelFormulaFeedingConnection",
        nextToken?: string | null,
      } | null,
      diaperChanges?:  {
        __typename: "ModelDiaperChangeConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      familyBabiesId?: string | null,
    },
    type: string,
    waste: Waste,
    id: string,
    createdAt: string,
    updatedAt: string,
    careGiverDiaperChangesId?: string | null,
    babyDiaperChangesId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateDiaperChangeSubscriptionVariables = {
  filter?: ModelSubscriptionDiaperChangeFilterInput | null,
  owner?: string | null,
};

export type OnUpdateDiaperChangeSubscription = {
  onUpdateDiaperChange?:  {
    __typename: "DiaperChange",
    by:  {
      __typename: "CareGiver",
      family?:  {
        __typename: "Family",
        name: string,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      userId: string,
      email: string,
      name?: string | null,
      pendingInvites?: Array< string | null > | null,
      formulaFeeding?:  {
        __typename: "ModelFormulaFeedingConnection",
        nextToken?: string | null,
      } | null,
      diaperChanges?:  {
        __typename: "ModelDiaperChangeConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      familyCareGiversId?: string | null,
      owner?: string | null,
    },
    when: string,
    for:  {
      __typename: "Baby",
      name: string,
      dateOfBirth: string,
      gender: Gender,
      family?:  {
        __typename: "Family",
        name: string,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      formulaFeeding?:  {
        __typename: "ModelFormulaFeedingConnection",
        nextToken?: string | null,
      } | null,
      diaperChanges?:  {
        __typename: "ModelDiaperChangeConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      familyBabiesId?: string | null,
    },
    type: string,
    waste: Waste,
    id: string,
    createdAt: string,
    updatedAt: string,
    careGiverDiaperChangesId?: string | null,
    babyDiaperChangesId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteDiaperChangeSubscriptionVariables = {
  filter?: ModelSubscriptionDiaperChangeFilterInput | null,
  owner?: string | null,
};

export type OnDeleteDiaperChangeSubscription = {
  onDeleteDiaperChange?:  {
    __typename: "DiaperChange",
    by:  {
      __typename: "CareGiver",
      family?:  {
        __typename: "Family",
        name: string,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      userId: string,
      email: string,
      name?: string | null,
      pendingInvites?: Array< string | null > | null,
      formulaFeeding?:  {
        __typename: "ModelFormulaFeedingConnection",
        nextToken?: string | null,
      } | null,
      diaperChanges?:  {
        __typename: "ModelDiaperChangeConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      familyCareGiversId?: string | null,
      owner?: string | null,
    },
    when: string,
    for:  {
      __typename: "Baby",
      name: string,
      dateOfBirth: string,
      gender: Gender,
      family?:  {
        __typename: "Family",
        name: string,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      formulaFeeding?:  {
        __typename: "ModelFormulaFeedingConnection",
        nextToken?: string | null,
      } | null,
      diaperChanges?:  {
        __typename: "ModelDiaperChangeConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      familyBabiesId?: string | null,
    },
    type: string,
    waste: Waste,
    id: string,
    createdAt: string,
    updatedAt: string,
    careGiverDiaperChangesId?: string | null,
    babyDiaperChangesId?: string | null,
    owner?: string | null,
  } | null,
};
