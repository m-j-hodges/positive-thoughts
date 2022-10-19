import { gql } from '@apollo/client';



export const QUERY_THOUGHTS = gql`query Query {
  thoughts {
    comments {
      commentor
      commentText
      commentAuthor
    }
    text
    author
    _id
  }
}`