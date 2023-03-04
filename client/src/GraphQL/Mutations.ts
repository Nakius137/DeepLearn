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
    loginUser(email: $email, password: $password, checked: $checked) {
      email
      token
    }
  }
`;