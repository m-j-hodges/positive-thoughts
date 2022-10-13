import { gql } from '@apollo/client';


export const STORE_THOUGHT = gql`  
mutation AddThought($author: String!, $text: String!) {
  addThought(author: $author, text: $text) {
    author
    text
  }
}`

// export const STORE_THOUGHT = gql`
// mutation Mutation($author: String!, $text: String!) {
//   addThought(author: $author, text: $text) {
//     author
//     text
//   }
// }`