import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, NormalizedCacheObject, ApolloProvider } from '@apollo/client';
import { ChakraProvider } from '@chakra-ui/react';
import starwarsTheme from '../src/themes/theme';
import { cache } from './cache';
import './index.css';
import App from '../src/pages/index';
import reportWebVitals from './reportWebVitals';

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
	cache,
	uri: 'http://localhost:4000/graphql'
});

ReactDOM.render(
	<ApolloProvider client={client}>
		<ChakraProvider theme={starwarsTheme} resetCSS={true}>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</ChakraProvider>
	</ApolloProvider>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
