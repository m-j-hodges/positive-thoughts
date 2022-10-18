import { gql } from '@apollo/client';



export const QUERY_THOUGHTS = gql`query Query {
  thoughts {
    comments {
      commentor
      commentText
      _id
      createdAt
      commentAuthor
    }
    text
    author
    _id
  }
}`