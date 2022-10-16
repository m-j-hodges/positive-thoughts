const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Profile {
    _id: ID
    firstName: String
    lastName: String
    username: String
    email: String
    password: String
    favThoughts: [String]
    comments: [String]
  }

type Auth {
  token: ID!
  profile: Profile
}
type Comment {
  _id: ID
  commentText: String
  commentor: ID
  createdAt: String
}
type Thought {
  _id: ID
  author: String
  text: String
  comments: [Comment]
}

  type Query {
    me: Profile
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    comment: Comment
    comments: [Comment]
    thought(thoughtId: ID!): Thought
    thoughts: [Thought]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addProfile(firstName: String!, lastName: String!, email:String!, password:String!, username:String!): Auth
    addSkill(profileId: ID!, skill: String!): Profile
    removeProfile(profileId: ID!): Profile
    removeSkill(profileId: ID!, skill: String!): Profile
    addThoughts(author: String!, text: String!) : [Thought]
    addThought(author: String!, text: String!): Thought
    addComment(thoughtId: String!, commentText: String!, commentor: String!): Thought
  }

  
  type User {
    email: String
    password: String
    token: String
  }

  input SignUpInput {
    firstName: String
    lastName: String
    email: String
    password: String
  }

  input LoginInput {
    email: String
    password: String
  }

`;
module.exports = typeDefs;