import { gql } from '@apollo/client';


export const QUERY_COMMENT = gql`  
query Query($thoughtId: ID!) {
  queryComment(thoughtId: $thoughtId) {
    _id
    author
    text
    comments {
      commentText
      commentor
      createdAt
      commentAuthor
      _id
    }
  }
}
`