const { RESTDataSource } = require('apollo-datasource-rest');
const { v4: uuidv4 } = require('uuid');

class StarwarsAPI extends RESTDataSource {
	constructor() {
		super();
		this.baseURL = 'https://swapi.dev/api/';
	}
	async getPeople() {
		try {
			const { results } = await this.get('people');
			return Array.isArray(results) ? results.map((data) => this.peopleReducer(data)) : [];
		} catch (error) {
			console.log(error);
		}
	}

	peopleReducer(data) {
		return {
			cursor: uuidv4(),
			id: uuidv4(),
			name: data && data.name,
			height: data && data.height,
			mass: data && data.mass,
			gender: data && data.gender,
			homeworld: data && data.homeworld
		};
	}
}
module.exports = StarwarsAPI;
