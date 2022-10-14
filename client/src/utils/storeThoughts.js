import { gql } from '@apollo/client';


export const STORE_THOUGHT = gql`  
mutation AddThought($author: String!, $text: String!) {
  addThought(author: $author, text: $text) {
    author
    text
  }
}`


