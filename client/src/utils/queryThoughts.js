import { gql } from '@apollo/client';



export const QUERY_THOUGHTS = gql`  
query getThoughts {
  thoughts {
    author
    text 
  }
}`