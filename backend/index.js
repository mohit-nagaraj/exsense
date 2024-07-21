import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import mergedResolvers from "./resolvers/index.js";


const server = new ApolloServer({
    typeDefs,
    resolvers: mergedResolvers,
});

const { url } = await startStandaloneServer(server);
console.log(`🚀 Server ready at ${url}`);