const { AuthenticationError } = require('apollo-server-express');
const Comment = require('../models/comments');
const Thought = require('../models/thoughts');
const { signToken } = require('../utils/auth');
const Profile = require('../models/profile');
const newuser = require('../models/users');

const resolvers = {
  Query: {
    profiles: async () => {
      return Profile.find();
    },

    profile: async (parent, { profileId }) => {
      return Profile.findOne({ _id: profileId });
    },
    // By adding context to our query, we can retrieve the logged in user without specifically searching for them
    me: async (parent, args, context) => {
      if (context.user) {
        return Profile.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    comments: async () => {
      return Comment.find();
    },
    comment: async (parent, args, context) => {
      if (context.user) {
        return Comment.findOne({ _id: context.comment._id });
      }
    },
    thought: async (parent, { thoughtId }) => {
      return Thought.findOne({ _id: thoughtId })
    },
    thoughts: async () => {
      return Thought.find().populate('comments')
    }
  },
  Mutation: {
    addThought: async (parent, { text, author }) => {
      return Thought.create({ author, text });
    },
    addThoughts: async (parent, [data]) => {
      return Thought.insertMany([data])
    },

    addProfile: async (parent, { firstName, lastName, email, password, username }) => {
      const profile = await Profile.create({ firstName, lastName, email, password, username });
      const token = signToken(profile);

      return { token, profile };
    },
    addUser: async (parent, { firstName, lastName, email, password, username }) => {
      return newuser.create({ firstName, lastName, email, password, username });
    },

    // login: async (parent, { email, password }) => {
    //   const profile = await Profile.findOne({ email });

    //   if (!profile) {
    //     throw new AuthenticationError('No profile with this email found!');
    //   }

    //   const correctPw = await profile.isCorrectPassword(password);

    //   if (!correctPw) {
    //     throw new AuthenticationError('Incorrect password!');
    //   }

    //   const token = signToken(profile);
    //   return { token, profile };
    // },


    addComment: async (parent, { thoughtId, commentor, commentText }, context) => {
      const findUser = Profile.findOne({ username: commentor })
      const UserId = findUser._id
      return Thought.findOneAndUpdate(
        { _id: thoughtId },
        {
          $addToSet: { comments: { commentText, commentor } }
        },
        {
          new: true,
          runValidators: true
        },
      )
    },

    // If user attempts to execute this mutation and isn't logged in, throw an error
    //   throw new AuthenticationError('You need to be logged in!');
    // },
    // Set up mutation so a logged in user can only remove their profile and no one else's
    removeProfile: async (parent, args, context) => {
      if (context.user) {
        return Profile.findOneAndDelete({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!')
    },
    // Make it so a logged in user can only remove a skill from their own profile
  },
};

module.exports = resolvers;