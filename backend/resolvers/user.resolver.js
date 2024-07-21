// if js extension is not there it will crash
import { users } from '../dummyData/data.js';

const userResolver = {
	Query: {
		users: () => users,
	},
	Mutation: {},
};

export default userResolver;

