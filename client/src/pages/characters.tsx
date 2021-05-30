import React, { useState } from 'react';
import { Container, Grid, Heading } from '@chakra-ui/react';
import { useQuery } from '@apollo/client';
import { RouteComponentProps } from '@reach/router';
import Card from '../components/card';
import Search from '../components/search';
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
			<Container centerContent maxW="xl" py="4" mt="40">
				<Heading as="h3" fontWeight={700} fontSize="lg" mr={2} mb={10}>
					Search by character name{' '}
				</Heading>
				<Search mt={25} placeholder="search by character name" />
				<Grid
					templateColumns={{
						base: 'repeat(1, 1fr)',
						sm: 'repeat(2, 1fr)',
						md: 'repeat(3, 1fr)',
						lg: 'repeat(3, 1fr)'
					}}
					gap={4}
					mt={10}
				>
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
				</Grid>
			</Container>
		</React.Fragment>
	);
};

export default Characters;
