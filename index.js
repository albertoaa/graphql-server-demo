import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// db
import db from './_db.js'

//types
import { typeDefs } from './schema.js'

// server setup
const serverPort = 4000;

const resolvers = {
  Query: {
    games() {
      return db.games
    },
    reviews() {
      return db.reviews
    },
    authors() {
      return db.authors
    }
  }
}

const server = new ApolloServer({
  // typeDefs -- definitions of types of data
  typeDefs,
  // resolvers -- describes the shape of the graph and the data in then including relationships between data objects
  resolvers

})

const { url } = await startStandaloneServer(server, {
  listen: {
    port: serverPort
  }
})

console.log('Server ready at port: ', serverPort)