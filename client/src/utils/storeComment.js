import { gql } from '@apollo/client';

export const STORE_COMMENT = gql`mutation Mutation($thoughtId: ID!, $commentText: String!, $commentor: String!) {
  addComment(thoughtId: $thoughtId, commentText: $commentText, commentor: $commentor) {
    _id
    author
    text
    comments {
      commentor
      createdAt
      commentText
      commentAuthor
      _id
    }
  }
}`