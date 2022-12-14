import { gql } from '@apollo/client';


export const STORE_THOUGHT = gql`  
mutation Mutation($author: String!, $text: String!) {
  addThought(author: $author, text: $text) {
    _id
    author
    text
    comments {
      commentText
      commentor
    }
  }
}`


