import { ApolloServer } from "apollo-server";

function startServer({ typeDefs, resolvers }) {
  const server = new ApolloServer({ typeDefs, resolvers });
  server.listen().then(({ url }) => {
    return console.log(`🚀 Server started at ${url}`);
  });
}

export default startServer;
