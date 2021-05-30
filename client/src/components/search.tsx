import React from 'react';
import { Flex, Input } from '@chakra-ui/react';

interface SearchProps {
	placeholder: string;
}

const Search: React.FC<SearchProps> = ({ placeholder }) => {
	return (
		<form>
			<Flex>
				<Input
					placeholder={placeholder}
					h={14}
					w={[ '80vw', '76vw', '60vw', '40vw' ]}
					borderWidth={2}
					borderColor="gray.600"
					_hover={{ borderColor: 'promary.100' }}
					_focus={{ borderColor: 'promary.200' }}
					rounded="md"
				/>
			</Flex>
		</form>
	);
};

export default Search;
