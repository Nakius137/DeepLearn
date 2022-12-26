import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation CreateUser($email: String!, $password: String!) {
    createUser(email: $email, password: $password) {
      email
    }
  }
`;
