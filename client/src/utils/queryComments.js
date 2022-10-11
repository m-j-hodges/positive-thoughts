import { gql } from '@apollo/client';



export const QUERY_COMMENTS = gql`  
query getComments {
  comments {
    _id
    content
    creator
    likes    
  }
}`