const mongoose = require('mongoose');

const thoughtsSchema = mongoose.Schema({
  author: {type: String, required: true},
  text: {type: String, required: true},
  charCount: {type: Number},
  dateSaved: {type: Date, default: Date.now}
})

const Thought = mongoose.model('Thought', thoughtsSchema);


module.exports = Thought;