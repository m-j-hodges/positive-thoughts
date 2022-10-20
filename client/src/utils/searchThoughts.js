import { gql } from '@apollo/client';



export const QUERY_MANYTHOUGHTS = gql`
  query getThoughts($thoughtId: ID!) {
    thoughts(thoughtId: $thoughtId) {
      _id
      text
      author
    }
  }
  `;

  // ["634ece93f21831a0a60b5da9","634ece93f21831a0a60b5dab","634ece93f21831a0a60b5dad","634ece8cf21831a0a60b5a5b","634ece96f21831a0a60b5f9f"]