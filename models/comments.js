const mongoose = require('mongoose');

const userSchema = require('./users')

const commentsSchema = mongoose.Schema({
  content: {type: String, required: true},
  creator: userSchema,
  dateCreated: {type: Date, default: Date.now},
  likes: {type: Number}
})