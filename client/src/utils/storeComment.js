import { gql } from '@apollo/client';

export const STORE_COMMENT = gql`
mutation Mutation($thoughtId: String!, $commentText: String!, $commentor: String!) {
  addComment(thoughtId: $thoughtId, commentText: $commentText, commentor: $commentor) {
    author
    text
    comments {
      commentText
      commentor
      createdAt
    }
    _id
  }
}`