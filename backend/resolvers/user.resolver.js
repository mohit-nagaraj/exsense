// if js extension is not htere it will crash
import {users} from '../dummyData/data.js'

const userResolver = {
	Query:{
        users: () => {
            return users;
        }
    },
    Mutation:{}
};

export default userResolver;