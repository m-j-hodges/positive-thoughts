const mongoose = require('mongoose');
require('dotenv').config();

const connectUri = process.env.connectUri

mongoose.connect(connectUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;