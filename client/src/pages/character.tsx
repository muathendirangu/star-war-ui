import React from 'react';
import { useQuery } from '@apollo/client';
import { RouteComponentProps } from '@reach/router';
import * as GetPersonDetailsTypes from '../graphql/__generated__/GetPerson';
import { GET_PERSON } from '../graphql/getPerson';
import Detail from '../components/detail';

interface CharacterProps extends RouteComponentProps {
	individualName?: any;
}

const Character: React.FC<CharacterProps> = ({ individualName }) => {
	const { data, loading, error } = useQuery<
		GetPersonDetailsTypes.GetPerson,
		GetPersonDetailsTypes.GetPersonVariables
	>(GET_PERSON, {
		variables: { individualName }
	});
	if (loading) return <div>Loading</div>;
	if (error) return <p>ERROR: {error.message}</p>;
	if (!data) return <p>Not found</p>;
	const { individual } = data;

	return (
		<React.Fragment>
			{individual &&
				individual.map((i: any) => {
					return <Detail key={i.id} person={i} />;
				})}
		</React.Fragment>
	);
};

export default Character;
