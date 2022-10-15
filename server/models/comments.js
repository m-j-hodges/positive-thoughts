const mongoose = require('mongoose');

const User = require('./users')

const commentsSchema = mongoose.Schema({
  commentText: {type: String, required: true},
  commentor: { type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  createdAt: {type: Date, default: Date.now},
})

const Comment = mongoose.model('Comment', commentsSchema)

module.exports = Comment;