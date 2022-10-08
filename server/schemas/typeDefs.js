const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Profile {
    _id: ID
    name: String
    skills: [String]!
  }

type Auth {
  token: ID!
  profile: Profile
}

  type Query {
    me: Profile
    profiles: [Profile]!
    profile(profileId: ID!): Profile
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addProfile(name: String!, email:String!, password:String!): Auth
    addSkill(profileId: ID!, skill: String!): Profile
    removeProfile(profileId: ID!): Profile
    removeSkill(profileId: ID!, skill: String!): Profile
  }


`;
module.exports = typeDefs;