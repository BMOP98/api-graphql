const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const typeDefs = require('./schemas/userSchema');
const resolvers = require('./resolvers/userResolvers');

const startServer = async () => {
  const app = express();

  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  server.applyMiddleware({ app });

  mongoose.connect('mongodb+srv://maximo98:BMOPpineda1@cluster0.gqrlqzi.mongodb.net/');

  app.listen({ port: process.env.PORT || 4000 }, () =>
    console.log(`Server ready at`)
  );
};

startServer();
