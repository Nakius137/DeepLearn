import { gql } from "@apollo/client";

export const LOAD_USERS = gql`
  query {
    user {
      email
      hashedPassword
    }
  }
`;
