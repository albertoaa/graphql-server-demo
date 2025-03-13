import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// server setup
const serverPort = 4000;

const server = new ApolloServer({
  // typeDefs

  // resolvers

})

const { url } = await startStandaloneServer(server, {
  listen: {
    port: serverPort
  }
})

console.log('Server ready at port: ', serverPort)