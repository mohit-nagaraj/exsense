// if js extension is not there it will crash
import { users } from '../dummyData/data.js';

const userResolver = {
	Query: {
		users: () => users,
        // 4 things we get inorder: parent, args, context, info
        // parent no need now so _
        //  args we destructured and get userId
        user: (_, { userId }) => users.find((user) => user._id === userId),
	},
	Mutation: {},
};

export default userResolver;

