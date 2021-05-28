const { ApolloServer } = require('apollo-server');
require('dotenv').config();
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const StarwarsAPI = require('./datasources/people');

const server = new ApolloServer({
	typeDefs,
	resolvers,
	dataSources: () => {
		return {
			starwarsAPI: new StarwarsAPI()
		};
	}
});

server.listen().then(() => {
	console.log(`
    Server is running!
    Listening on port 4000
    Explore the data graph at https://studio.apollographql.com/dev
  `);
});
