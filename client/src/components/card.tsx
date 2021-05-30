import React from 'react';
import { Box, Badge, Button, Flex, Stack } from '@chakra-ui/react';
import { MdMore } from 'react-icons/md';
import * as PersonDataTypes from '../graphql/__generated__/PersonData';

interface CardProps {
	person: PersonDataTypes.PersonData;
}
const Card: React.FC<CardProps> = ({ person }) => {
	const duration = 150;
	const { name, height, mass, gender, homeworld } = person;
	return (
		<Box
			maxW="xl"
			w={[ '80vw', '40vw', '30vw', '17vw' ]}
			borderWidth="1px"
			borderRadius="lg"
			overflow="hidden"
			_hover={{ bg: 'primary.50', color: 'gray.500' }}
			shadow="sm"
			p={4}
			cursor="pointer"
			transition={`background-color ${duration}ms ease-in`}
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

				<Box mt="1" as="h4" lineHeight="tight" isTruncated>
					I am a character at Starwars
				</Box>

				<Box>click the button below to view more details about me</Box>
				<Flex justifyContent="center" mt={5}>
					<Stack>
						<Button
							as="a"
							href={`/character/${name}`}
							bg="primary.200"
							color="gray.800"
							_hover={{ bg: 'green.400', color: 'white' }}
						>
							{<MdMore />}
							view more details
						</Button>
					</Stack>
				</Flex>
			</Box>
		</Box>
	);
};

export default Card;
