import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

//types
import { typeDefs } from './schema'

// server setup
const serverPort = 4000;

const server = new ApolloServer({
  // typeDefs -- definitions of types of data
  typeDefs,
  // resolvers -- describes the shape of the graph and the data in then including relationships between data objects

})

const { url } = await startStandaloneServer(server, {
  listen: {
    port: serverPort
  }
})

console.log('Server ready at port: ', serverPort)