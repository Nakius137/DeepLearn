import { gql } from "apollo-server-express";

const typeDefs = gql`
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

export default typeDefs;
