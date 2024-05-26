const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    Nombre: String!
    Apellido: String!
    mail: String!
  }

  type Query {
    users: [User]
  }

  type Mutation {
    addUser(Nombre: String!, Apellido: String!, mail: String!): User
  }
`;

module.exports = typeDefs;
