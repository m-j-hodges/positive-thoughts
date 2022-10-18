const { gql } = require('apollo-server-express');

const typeDefs = gql`

type Auth {
  token: ID!
  user: User
}
type Comment {
  _id: ID
  commentText: String
  commentor: ID
  createdAt: String
  commentAuthor: String
}
type Thought {
  _id: ID
  author: String
  text: String
  comments: [Comment]
}

  type Query {
    me: User
    comment: Comment
    comments: [Comment]
    thought(thoughtId: ID!): Thought
    thoughts: [Thought]
    user: User
    users: [User]
  }

  type Mutation {
    addThoughts(author: String!, text: String!) : [Thought]
    addThought(author: String!, text: String!): Thought
    addComment(thoughtId: String!, commentText: String!, commentor: String!): Thought
    removeComment(thoughtId: String, commentId: String!) : Thought
    addUser(firstName: String!, lastName: String!, email:String!, password:String!, username:String!): Auth
    login(email: String!, password: String!): Auth
  }

  
  type User {
    _id: ID
    firstName: String
    lastName: String
    username: String
    email: String
    password: String
  }


`;
module.exports = typeDefs;