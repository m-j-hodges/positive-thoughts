import { gql } from '@apollo/client';



export const QUERY_THOUGHTS = gql`  
query Thoughts {
  thoughts {
    author
    text
    _id
  }
}`