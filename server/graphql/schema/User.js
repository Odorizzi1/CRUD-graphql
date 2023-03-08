const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
  }

  type Query {
    getUser(id: ID!): User
    getUsers: [User]!
  }

  input UserInput {
    name: String!
    email: String!
    password: String!
  }

  type Mutation {
    createUser(input: UserInput!): User!
    updateUser(id: ID!, input: UserInput!): User!
    deleteUser(id: ID!): User!
  }
`;

module.exports = typeDefs;