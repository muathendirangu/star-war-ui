import React from 'react';

interface HeaderProps {
	variable?: string | any;
}

const Header: React.FC<HeaderProps> = ({ variable }) => {
	console.log(variable);
	const { individual } = variable;
	const { name } = individual;
	console.log(name);
	return (
		<div>
			<h1>{name ? name : ''}</h1>
		</div>
	);
};

export default Header;
