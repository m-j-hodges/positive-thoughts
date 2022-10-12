import { gql } from '@apollo/client';


export const STORE_THOUGHTS = gql`  
mutation addThoughts($text: String!, $author: String!) {
  addThought(text: $text, author: $author) {
    _id
    author
    text
  }
}`