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
      username
      password
      comments
    }
  }
`;



export const QUERY_SINGLE_PROFILE = gql`
query user ($profileId: ID!) {
  user (profileId: $profileId) {
    _id
    firstName
    lastName
    username
    email
    password
    favThought {
      _id
      author
      text
    }
  }
}
`;

export const QUERY_ME = gql`
query me {
  me {
    _id
    firstName
    lastName
    username
    email
    password
    favThought {
      _id
      author
      text
    }
  }
}
`;



export const GET_FAV_QUOTES = gql`
query getFaveQuotes($email: String!) {
  getFavQuotes(email: $email) {
    favThought {
      author
      text
      _id
    }
  }
}
`;