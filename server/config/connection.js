const mongoose = require('mongoose');
const connectUri = 'mongodb://127.0.0.1:27017/thoughtsDB'

mongoose.connect(connectUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;