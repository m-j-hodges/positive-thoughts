import { gql } from '@apollo/client';


export const LOGIN = gql`mutation Mutation($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      email
      password
    }
  }
}`