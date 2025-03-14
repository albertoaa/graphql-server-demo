import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// db
import db from './_db.js';

//types
import { typeDefs } from './schema.js';

// server setup
const serverPort = 4000;

const resolvers = {
  Query: {
    games() {
      return db.games;
    },
    reviews() {
      return db.reviews;
    },
    authors() {
      return db.authors;
    },
    review(_, args, context) {
      return db.reviews.find((review) => review.id === args.id);
    },
    game(_, args, context) {
      return db.games.find((game) => game.id === args.id);
    },
    author(_, args, context) {
      return db.authors.find((author) => author.id === args.id);
    },
  },
  Game: {
    reviews(parent) {
      return db.reviews.filter((review) => review.game_id === parent.id)
    }
  },
  Author: {
    reviews(parent) {
      return db.reviews.filter((author) => author.author_id === parent.id)
    }
  },
  Review: {
    game(parent) {
      return db.games.find((game) => game.id === parent.game_id)
    },
    author(parent) {
      return db.authors.find((author) => author.id === parent.author_id)
    }
  }
};

const server = new ApolloServer({
  // typeDefs -- definitions of types of data
  typeDefs,
  // resolvers -- describes the shape of the graph and the data in then including relationships between data objects
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: {
    port: serverPort,
  },
});

console.log('Server ready at port: ', serverPort);
