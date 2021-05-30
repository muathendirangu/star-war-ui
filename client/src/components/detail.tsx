import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { Box, Button, Flex, Heading, Stack, Container, Badge } from '@chakra-ui/react';
import { MdHome, MdDetails } from 'react-icons/md';
import * as PersonDataTypes from '../graphql/__generated__/PersonData';

interface DetailProps extends RouteComponentProps {
	person: PersonDataTypes.PersonData;
}

const Detail: React.FC<DetailProps> = ({ person }) => {
	const { name, height, mass, gender, homeworld } = person;
	return (
		<React.Fragment>
			<Container centerContent maxW="xl" py="4" mt="40">
				<Heading as="h3" fontWeight={700} fontSize="lg" mr={2} mb={5}>
					Character details
				</Heading>

				<Flex
					align="center"
					justify={{ base: 'center', md: 'center', xl: 'center' }}
					minW="50vw"
					p={3}
					bg="gray.100"
					borderRadius="lg"
					_hover={{ bg: 'primary.50', color: 'gray.500' }}
					w={{ base: '70%', sm: '30%', md: '70%' }}
				>
					<Box p="6" align="center">
						{name ? (
							<Box>
								<h1> My name is</h1>
								<Badge borderRadius="full" p={1} colorScheme="red">
									{name}
								</Badge>
							</Box>
						) : (
							''
						)}

						<br />
						<Box>
							I weigh around {mass} kgs and my height is {height} cm
						</Box>
						<br />
						<Box mt="1" as="h4" lineHeight="tight" isTruncated>
							This is my gender{' '}
							<Box as="span" fontWeight="semibold" color="gray.600" ml="2" fontSize="sm">
								{gender}
							</Box>
						</Box>
						<br />
						<Box>
							For more details about my homeworld planet click the view button{' '}
							<Button
								as="a"
								href={`${homeworld}`}
								bg="cyan.500"
								color="gray.800"
								_hover={{ bg: 'green.400', color: 'white' }}
							>
								{<MdDetails />}
								View
							</Button>
						</Box>
						<br />
						<Flex justifyContent="center" mt={5}>
							<Stack>
								<Button
									as="a"
									href={`/`}
									bg="primary.200"
									color="gray.800"
									_hover={{ bg: 'green.400', color: 'white' }}
								>
									{<MdHome />}
									Go back home
								</Button>
							</Stack>
						</Flex>
					</Box>
				</Flex>
			</Container>
		</React.Fragment>
	);
};

export default Detail;
