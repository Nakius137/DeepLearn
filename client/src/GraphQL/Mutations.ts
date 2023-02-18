import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation CreateUser($email: String!, $password: String!) {
    createUser(email: $email, password: $password) {
      token
    }
  }
`;

export const LOG_USER = gql`
  mutation LogUser($email: String!, $password: String!, $checked: Boolean!) {
    logUser(email: $email, password: $password, checked: $checked) {
      token
    }
  }
`;