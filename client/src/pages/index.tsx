import React, { Fragment } from 'react';
import { Router } from '@reach/router';
import Characters from './characters';
import Character from './character';

function App() {
	return (
		<Fragment>
			<Router primary={false} component={Fragment}>
				<Characters path="/" />
				<Character path="character/:individualName" />
			</Router>
		</Fragment>
	);
}

export default App;
