import { gql } from '@apollo/client';


export const ADD_PROFILE = gql`mutation Mutation($firstName: String!, $lastName: String!, $email: String!, $password: String!, $username: String!) {
  addProfile(firstName: $firstName, lastName: $lastName, email: $email, password: $password, username: $username) {
    profile {
      firstName
      lastName
      username
      email
      password
    }
  }
}`