import { ApolloServer } from 'apollo-server';
import { typeDefs } from './typedefs';
import { resolvers } from './resolvers';

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀 GQL Server is ready at ${url}`);
});
