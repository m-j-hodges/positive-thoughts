import { gql } from "@apollo/client";


export const NEW_USER = gql`
mutation Mutation($firstName: String!, $lastName: String!, $email: String!, $password: String!, $username: String!) {
  addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password, username: $username) {
    token
    user {
      firstName
      lastName
      username
      email
    }
  }
}`