import { gql } from '@apollo/client';


export const STORE_FAVTHOUGHT = gql`mutation StoreFavThought($email: String!, $thoughtId: ID!) {
  storeFavThought(email: $email, thoughtId: $thoughtId) {
    favThought {
      author
    }
    password
    email
    username
    lastName
    firstName
    _id
  }
}`