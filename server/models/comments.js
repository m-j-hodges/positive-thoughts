const mongoose = require('mongoose');

const User = require('./users')

const commentsSchema = mongoose.Schema({
  content: {type: String, required: true},
  creator: { type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  dateCreated: {type: Date, default: Date.now},
  likes: {type: Number}
})

const Comment = mongoose.model('Comment', commentsSchema)

module.exports = Comment;