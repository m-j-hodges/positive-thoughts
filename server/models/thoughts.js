const mongoose = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const thoughtsSchema = mongoose.Schema({
  author: {type: String, required: true},
  text: {type: String, required: true},
  dateSaved: {type: Date, default: Date.now}
})

const Thought = mongoose.model('Thought', thoughtsSchema);


module.exports = Thought;