import { gql } from '@apollo/client';

//code on line 5 is what we want to run in graphql as a query, currently has sample code from a course activity code
export const QUERY_PROFILES = gql`
  query allProfiles {
    profiles {
      _id
      name
      skills
    }
  }`

export const QUERY_PROFILE = gql`
  query getProfile {
    profile {
      name
      email
      password
      favThoughts
      comments
    }
  }
`;


