const mongoose = require('mongoose');
const connectUri = 'mongodb+srv://mhodges2022:GTeru3FuStuUHLmM@cluster0.hcr3wlm.mongodb.net/test'


mongoose.connect(connectUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;