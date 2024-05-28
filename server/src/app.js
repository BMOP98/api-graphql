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

  
  // Importar las rutas
  app.use('/clientes', require('./routes/clientes'));

  // Ruta de fallback para servir index.html
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client', 'public/index.html'));
  });

  app.listen({ port: 4000 }, () =>
    console.log(`Server ready at `)
  );

  

};

startServer();
