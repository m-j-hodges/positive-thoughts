import { gql } from '@apollo/client';



export const QUERY_THOUGHTS = gql`query Query {
  thoughts {
    commentAuthor
    comments {
      commentor
      commentAuthor
      commentText
    }
    text
    author
  }
}`