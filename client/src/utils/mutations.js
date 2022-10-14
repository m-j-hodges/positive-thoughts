import {gql} from '@apollo/client';


export const ADD_PROFILE = gql`mutation Mutation($name: String!, $email: String!, $password: String!, $username: String!) {
  addProfile(name: $name, email: $email, password: $password, username: $username) {
    profile {
      name
      username
      email
      password
    }
  }
}`