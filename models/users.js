const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
  userName: { type: String, required: true},
  firstName: { type: String, required: true},
  lastName: {type: String, required: true},
  email: { type: String, required: true },
  password: { type: String, required: true},
  favQuotes: [{ type: String }],
  lastAccessed: { type: Date, default: Date.now },
})

const User = mongoose.model('User', userSchema);


module.exports = User;