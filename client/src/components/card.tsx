import React from 'react';
import * as PersonDataTypes from '../graphql/__generated__/PersonData';

interface CardProps {
	person: PersonDataTypes.PersonData;
}
const Card: React.FC<CardProps> = ({ person }) => {
	const { name, height, mass, gender, homeworld } = person;
	return (
		<div>
			<h1>{name ? name : ''}</h1>
			<h2>{gender ? gender : ''}</h2>
			<h3>{height ? height : ''}</h3>
			<h4>{mass ? mass : ''}</h4>
			<h5>{homeworld ? homeworld : ''}</h5>
		</div>
	);
};

export default Card;
