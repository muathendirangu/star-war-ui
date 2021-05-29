import { gql } from '@apollo/client';
export const PERSON_FRAGMENT = gql`
	fragment PersonData on Person {
		__typename
		id
		name
		height
		gender
		mass
		homeworld
	}
`;
