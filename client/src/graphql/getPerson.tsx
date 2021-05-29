import { gql } from '@apollo/client';
import { PERSON_FRAGMENT } from './commonFragment';

export const GET_PERSON = gql`
 query GetPerson($individualName: String!) {
  individual(name: $individualName) {
    cursor
     ...PersonData
  }
}
  ${PERSON_FRAGMENT}
`;
