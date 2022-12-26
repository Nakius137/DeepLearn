import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Query {
    user: [User!]!
  }

  type Mutation {
    createUser(email: String!, password: String!): User
  }

  type User {
    email: String!
    password: String!
  }
`;

export default typeDefs;
