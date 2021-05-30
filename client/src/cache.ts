import { InMemoryCache, Reference } from '@apollo/client';

export const cache: InMemoryCache = new InMemoryCache({
	typePolicies: {
		Query: {
			fields: {
				people: {
					keyArgs: false,
					merge(existing, incoming) {
						let people: Reference[] = [];
						if (existing && existing.people) {
							people = people.concat(existing.people);
						}
						if (incoming && incoming.people) {
							people = people.concat(incoming.people);
						}
						return {
							...incoming,
							people
						};
					}
				}
			}
		}
	}
});
