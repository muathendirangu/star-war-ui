/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetPerson
// ====================================================

export interface GetPerson_individual {
  __typename: "Person";
  cursor: string | null;
  id: string | null;
  name: string | null;
  height: string | null;
  gender: string | null;
  mass: string | null;
  homeworld: string | null;
}

export interface GetPerson {
  individual: (GetPerson_individual | null)[] | null;
}

export interface GetPersonVariables {
  individualName: string;
}
