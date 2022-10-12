import { gql } from '@apollo/client';


export const STORE_THOUGHTS = gql`  
mutation storeThoughts {
  thoughts {
    author
    text
    dateSaved
  }
}`