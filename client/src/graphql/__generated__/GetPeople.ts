/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetPeople
// ====================================================

export interface GetPeople_people_people {
  __typename: "Person";
  id: string | null;
  name: string | null;
  height: string | null;
  gender: string | null;
  mass: string | null;
  homeworld: string | null;
}

export interface GetPeople_people {
  __typename: "PersonConnection";
  cursor: string | null;
  hasMore: boolean | null;
  people: GetPeople_people_people[];
}

export interface GetPeople {
  people: GetPeople_people;
}

export interface GetPeopleVariables {
  peopleCursor?: string | null;
}
