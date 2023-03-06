/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateFeedingInput = {
  DateTime: string,
  Id: string,
  By?: string | null,
  Oz?: number | null,
};

export type Feeding = {
  __typename: "Feeding",
  DateTime: string,
  Id: string,
  By?: string | null,
  Oz?: number | null,
};

export type UpdateFeedingInput = {
  DateTime: string,
  Id: string,
};

export type DeleteFeedingInput = {
  DateTime: string,
  Id: string,
  By?: string | null,
  Oz?: number | null,
};

export type TableFeedingFilterInput = {
  DateTime?: TableStringFilterInput | null,
  Id?: TableStringFilterInput | null,
};

export type TableStringFilterInput = {
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
};

export type FeedingConnection = {
  __typename: "FeedingConnection",
  items?:  Array<Feeding | null > | null,
  nextToken?: string | null,
};

export type CreateFeedingMutationVariables = {
  input: CreateFeedingInput,
};

export type CreateFeedingMutation = {
  createFeeding?:  {
    __typename: "Feeding",
    DateTime: string,
    Id: string,
    By?: string | null,
    Oz?: number | null,
  } | null,
};

export type UpdateFeedingMutationVariables = {
  input: UpdateFeedingInput,
};

export type UpdateFeedingMutation = {
  updateFeeding?:  {
    __typename: "Feeding",
    DateTime: string,
    Id: string,
    By?: string | null,
    Oz?: number | null,
  } | null,
};

export type DeleteFeedingMutationVariables = {
  input: DeleteFeedingInput,
};

export type DeleteFeedingMutation = {
  deleteFeeding?:  {
    __typename: "Feeding",
    DateTime: string,
    Id: string,
    By?: string | null,
    Oz?: number | null,
  } | null,
};

export type GetFeedingQueryVariables = {
  Id: string,
  DateTime: string,
};

export type GetFeedingQuery = {
  getFeeding?:  {
    __typename: "Feeding",
    DateTime: string,
    Id: string,
    By?: string | null,
    Oz?: number | null,
  } | null,
};

export type ListFeedingsQueryVariables = {
  filter?: TableFeedingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFeedingsQuery = {
  listFeedings?:  {
    __typename: "FeedingConnection",
    items?:  Array< {
      __typename: "Feeding",
      DateTime: string,
      Id: string,
      By?: string | null,
      Oz?: number | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateFeedingSubscriptionVariables = {
  DateTime?: string | null,
  Id?: string | null,
};

export type OnCreateFeedingSubscription = {
  onCreateFeeding?:  {
    __typename: "Feeding",
    DateTime: string,
    Id: string,
    By?: string | null,
    Oz?: number | null,
  } | null,
};

export type OnUpdateFeedingSubscriptionVariables = {
  DateTime?: string | null,
  Id?: string | null,
};

export type OnUpdateFeedingSubscription = {
  onUpdateFeeding?:  {
    __typename: "Feeding",
    DateTime: string,
    Id: string,
    By?: string | null,
    Oz?: number | null,
  } | null,
};

export type OnDeleteFeedingSubscriptionVariables = {
  DateTime?: string | null,
  Id?: string | null,
};

export type OnDeleteFeedingSubscription = {
  onDeleteFeeding?:  {
    __typename: "Feeding",
    DateTime: string,
    Id: string,
    By?: string | null,
    Oz?: number | null,
  } | null,
};
