const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Profile {
    _id: ID
    name: String
  email: String
  }

type Auth {
  token: ID!
  profile: Profile
}

type Thought {
  _id: ID
  thoughtText: String
  thoughtAuthor: String
  createdAt: String
  comments: [Comment]!
}

type Comment {
  _id: ID
  commentText: String
  createdAt: String
}

type Query {
  thoughts: [Thought]!
  thought(thoughtId: ID!): Thought
}

  type Query {
    me: Profile
    profiles: [Profile]!
    profile(profileId: ID!): Profile
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addProfile(name: String!, email:String!, password:String!): Auth
    addComment(profileId: ID!, comment: String!): Profile
    removeProfile(profileId: ID!): Profile
    removeComment(profileId: ID!, comment: String!): Profile
    addThought(thoughtText: string!, thoughtAuthor: String!): Thought
    addThoughtComment(thoughtId: ID!, commentText: String!): Thought
    removeThoughtComment(thoughtId: ID!, commentId: ID!): Thought
  }


`;
module.exports = typeDefs;