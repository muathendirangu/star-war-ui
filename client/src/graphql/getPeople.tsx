import { gql } from '@apollo/client';
import { PERSON_FRAGMENT } from './commonFragment';

export const GET_PEOPLE = gql`
  query GetPeople($peopleCursor: String) {
  people(cursor: $peopleCursor) {
    cursor
    hasMore
    people {
      ...PersonData
    }
  }
}
  ${PERSON_FRAGMENT}
`;
