const { AuthenticationError } = require('apollo-server-express');
const Comment = require('../models/comments');
const Thought = require('../models/thoughts');
const { signToken } = require('../utils/auth');
const Profile = require('../models/profile');

const User = require('../models/users');


const resolvers = {
  Query: {
    queryComment: async (parent, {thoughtId}) => {
    return Thought.findOne({_id: thoughtId}).populate('comments')
    },
    getFavQuotes: async (parent, {email}) => {
      return User.findOne({email:email}).populate('favThought')
    },
    users: async () => {
      return User.find();
    },

    user: async (parent, { profileId }) => {
      return User.findOne({ _id: profileId });
    },
    // By adding context to our query, we can retrieve the logged in user without specifically searching for them
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
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
    storeFavThought: async (parent, {email, thoughtId}) => {
      return User.findOneAndUpdate({email: email}, {
        $addToSet: {
          favThought: thoughtId
        }
      })
    },
    addThought: async (parent, { text, author }) => {
      return Thought.create({ author, text });
    },
    addThoughts: async (parent, [data]) => {
      return Thought.insertMany([data])
    },
    addUser: async (parent, { firstName, lastName, email, password, username }) => {
      const user = await User.create({ firstName, lastName, email, password, username });
      const token = signToken(user)
      return { user, token }
    },
    login: async (parent, { email, password }) => {
      // Look up the user by the provided email address. Since the `email` field is unique, we know that only one person will exist with that email
      const user = await User.findOne({ email });

      // If there is no user with that email address, return an Authentication error stating so
      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }
      
      // If there is a user found, execute the `isCorrectPassword` instance method and check if the correct password was provided
      const correctPw = await user.isCorrectPassword(password);

      // If the password is incorrect, return an Authentication error stating so
      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      // If email and password are correct, sign user into the application with a JWT
      const token = signToken(user);

      // Return an `Auth` object that consists of the signed token and user's information
      return { token, user };
    },

    addComment: async (parent, {thoughtId, commentor, commentText}, context) => {
    
    return Thought.findOneAndUpdate({_id:thoughtId}, {
          $addToSet: {comments: {commentText, commentor}},
        },
        {new: true, runValidators: true,}
        )
      },
    removeComment: async (parent, {thoughtId, commentId}, context) => {
     const findComment = await Thought.findOneAndUpdate({_id: thoughtId}, {
      $pull: { comments: {_id: commentId}}
     }, {new: true}, (err, result) => {
      if(err) {console.log(err)}
     })
     return findComment
      }
    ,


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
    // Make it so a logged in user can only remove a skill from their own profile
  },
}

module.exports = resolvers;