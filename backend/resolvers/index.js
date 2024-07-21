import { mergeResolvers } from "@graphql-tools/merge";
import userResolver from "./user.resolver.js";
import transactionResolver from "./transaction.resolver.js";

// better to put resolvers separately and merge them
// instead of having 1 large resolver => easier to maintain
const mergedResolvers = mergeResolvers([userResolver, transactionResolver]);

export default mergedResolvers;