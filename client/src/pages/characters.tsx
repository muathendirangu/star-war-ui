import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { RouteComponentProps } from '@reach/router';
import Card from '../components/card';
import * as GetPeopleListTypes from '../graphql/__generated__/GetPeople';
import { GET_PEOPLE } from '../graphql/getPeople';

interface PeopleProps extends RouteComponentProps {}

const Characters: React.FC<PeopleProps> = () => {
	const { data, loading, error, fetchMore } = useQuery<
		GetPeopleListTypes.GetPeople,
		GetPeopleListTypes.GetPeopleVariables
	>(GET_PEOPLE);
	const [ isLoadingMore, setIsLoadingMore ] = useState(false);

	if (loading) return <div>Loading</div>;
	if (error || !data) return <p>ERROR</p>;
	return (
		<React.Fragment>
			{data.people &&
				data.people.people &&
				data.people.people.map((individual: any) => {
					return <Card key={individual.id} person={individual} />;
				})}
			{data.people &&
				data.people.hasMore &&
				(isLoadingMore ? (
					<div>Loading</div>
				) : (
					<button
						onClick={async () => {
							setIsLoadingMore(true);
							await fetchMore({
								variables: {
									cursor: data.people.cursor
								}
							});
							setIsLoadingMore(false);
						}}
					>
						Load More
					</button>
				))}
		</React.Fragment>
	);
};

export default Characters;
