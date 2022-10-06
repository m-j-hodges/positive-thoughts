const { gql } = require('apollo-server-express');

const typeDefs = gql`
code taken from lesson 14 in week 21 01/activities 
type Profile {
    _id: ID
    name: String
    skills: [String]!
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
  }

  type Mutation {
    addProfile(name: String!): Profile
    addSkill(profileId: ID!, skill: String!): Profile
    removeProfile(profileId: ID!): Profile
    removeSkill(profileId: ID!, skill: String!): Profile
  }


`;
module.exports = typeDefs;