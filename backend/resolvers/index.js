import userResolver from './user.resolver.js';
import transactionResolver from './transaction.resolver.js';

const mergedResolvers = {
	...userResolver,
	...transactionResolver,
};

export default mergedResolvers;
