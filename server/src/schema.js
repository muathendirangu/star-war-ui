const { gql } = require('apollo-server');

const typeDefs = gql`
        """
        A query that returns a list of starwars characters
        """
	type Query{
        people(
             """
            The number of results to show. Must be >= 1. Default = 20
            """
            pageSize: Int
            """
            If you add a cursor here, it will only return results _after_ this cursor
            """
            cursor: String
        ):PersonConnection!
        individual(name:String!):Person
    }
    """
    An object of type person for a starwars character
    """
    type Person {
        id:String
        cursor:String
		name: String
		height: String
		gender: String
		mass: String
		homeworld: String
	}
    """
    Simple wrapper around our list of people that contains a cursor to the
    last item in the list. Pass this cursor to the people query to fetch results
    after these.
    """
    type PersonConnection {
        cursor: String
        hasMore: Boolean
        people: [Person!]!
    }
`;

module.exports = typeDefs;
