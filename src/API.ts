/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateFeedingInput = {
  DateTime: string,
  ID: string,
  By?: string | null,
  Oz: number,
  type: string,
  id?: string | null,
};

export type ModelFeedingConditionInput = {
  DateTime?: ModelStringInput | null,
  ID?: ModelStringInput | null,
  By?: ModelStringInput | null,
  Oz?: ModelIntInput | null,
  type?: ModelStringInput | null,
  and?: Array< ModelFeedingConditionInput | null > | null,
  or?: Array< ModelFeedingConditionInput | null > | null,
  not?: ModelFeedingConditionInput | null,
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

export type Feeding = {
  __typename: "Feeding",
  DateTime: string,
  ID: string,
  By?: string | null,
  Oz: number,
  type: string,
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateFeedingInput = {
  DateTime?: string | null,
  ID?: string | null,
  By?: string | null,
  Oz?: number | null,
  type?: string | null,
  id: string,
};

export type DeleteFeedingInput = {
  id: string,
};

export type ModelFeedingFilterInput = {
  DateTime?: ModelStringInput | null,
  ID?: ModelStringInput | null,
  By?: ModelStringInput | null,
  Oz?: ModelIntInput | null,
  type?: ModelStringInput | null,
  and?: Array< ModelFeedingFilterInput | null > | null,
  or?: Array< ModelFeedingFilterInput | null > | null,
  not?: ModelFeedingFilterInput | null,
};

export type ModelFeedingConnection = {
  __typename: "ModelFeedingConnection",
  items:  Array<Feeding | null >,
  nextToken?: string | null,
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


export type ModelSubscriptionFeedingFilterInput = {
  DateTime?: ModelSubscriptionStringInput | null,
  ID?: ModelSubscriptionStringInput | null,
  By?: ModelSubscriptionStringInput | null,
  Oz?: ModelSubscriptionIntInput | null,
  type?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionFeedingFilterInput | null > | null,
  or?: Array< ModelSubscriptionFeedingFilterInput | null > | null,
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

export type CreateFeedingMutationVariables = {
  input: CreateFeedingInput,
  condition?: ModelFeedingConditionInput | null,
};

export type CreateFeedingMutation = {
  createFeeding?:  {
    __typename: "Feeding",
    DateTime: string,
    ID: string,
    By?: string | null,
    Oz: number,
    type: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateFeedingMutationVariables = {
  input: UpdateFeedingInput,
  condition?: ModelFeedingConditionInput | null,
};

export type UpdateFeedingMutation = {
  updateFeeding?:  {
    __typename: "Feeding",
    DateTime: string,
    ID: string,
    By?: string | null,
    Oz: number,
    type: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteFeedingMutationVariables = {
  input: DeleteFeedingInput,
  condition?: ModelFeedingConditionInput | null,
};

export type DeleteFeedingMutation = {
  deleteFeeding?:  {
    __typename: "Feeding",
    DateTime: string,
    ID: string,
    By?: string | null,
    Oz: number,
    type: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetFeedingQueryVariables = {
  id: string,
};

export type GetFeedingQuery = {
  getFeeding?:  {
    __typename: "Feeding",
    DateTime: string,
    ID: string,
    By?: string | null,
    Oz: number,
    type: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListFeedingsQueryVariables = {
  filter?: ModelFeedingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFeedingsQuery = {
  listFeedings?:  {
    __typename: "ModelFeedingConnection",
    items:  Array< {
      __typename: "Feeding",
      DateTime: string,
      ID: string,
      By?: string | null,
      Oz: number,
      type: string,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type FeedingByDateQueryVariables = {
  type: string,
  DateTime?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelFeedingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type FeedingByDateQuery = {
  feedingByDate?:  {
    __typename: "ModelFeedingConnection",
    items:  Array< {
      __typename: "Feeding",
      DateTime: string,
      ID: string,
      By?: string | null,
      Oz: number,
      type: string,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateFeedingSubscriptionVariables = {
  filter?: ModelSubscriptionFeedingFilterInput | null,
};

export type OnCreateFeedingSubscription = {
  onCreateFeeding?:  {
    __typename: "Feeding",
    DateTime: string,
    ID: string,
    By?: string | null,
    Oz: number,
    type: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateFeedingSubscriptionVariables = {
  filter?: ModelSubscriptionFeedingFilterInput | null,
};

export type OnUpdateFeedingSubscription = {
  onUpdateFeeding?:  {
    __typename: "Feeding",
    DateTime: string,
    ID: string,
    By?: string | null,
    Oz: number,
    type: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteFeedingSubscriptionVariables = {
  filter?: ModelSubscriptionFeedingFilterInput | null,
};

export type OnDeleteFeedingSubscription = {
  onDeleteFeeding?:  {
    __typename: "Feeding",
    DateTime: string,
    ID: string,
    By?: string | null,
    Oz: number,
    type: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
