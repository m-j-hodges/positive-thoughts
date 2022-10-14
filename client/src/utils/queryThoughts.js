import { gql } from '@apollo/client';



export const QUERY_THOUGHTS = gql`  
query Query {
  thoughts {
    _id
    author
    text
    comments {
      commentText
      commentor
    }
  }
}`