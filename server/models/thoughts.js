const mongoose = require('mongoose');
const { Schema } = require('mongoose')

const thoughtsSchema = mongoose.Schema({
  author: { type: String, required: true },
  text: { type: String, required: true },
  dateSaved: { type: Date, default: Date.now },
  comments: [
    {
      commentText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
      commentor: {
        type: String
      },
    }
  ]
})

const Thought = mongoose.model('Thought', thoughtsSchema);


module.exports = Thought;