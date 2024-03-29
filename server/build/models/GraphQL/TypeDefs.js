"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const typeDefs = (0, apollo_server_express_1.gql) `
  type Query {
    user: [User!]!
  }

  type Mutation {
    createUser(email: String!, password: String!): User
    loginUser(email: String!, password: String!, checked: Boolean!): User
  }

  type User {
    email: String!
    hashedPassword: String!
    token: String!
  }
`;
exports.default = typeDefs;
