const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const mongoose = require('mongoose');
const typeDefs = require('./schemas/userSchema');
const resolvers = require('./resolvers/userResolvers');

const startServer = async () => {
  const app = express();
  
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  server.applyMiddleware({ app });
  

  const mongoUri = 'mongodb+srv://maximo98:BMOPpineda1@cluster0.gqrlqzi.mongodb.net/';
  mongoose.connect(mongoUri)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

  app.listen({ port: process.env.PORT || 4000 }, () =>
    console.log(`Server ready at `)
  );

};

startServer();
