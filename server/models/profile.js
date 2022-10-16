const { mongoose, Schema } = require('mongoose');
const bcrypt = require('bcrypt')


const profileSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  firstName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  favThoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Thought'
    }
  ],
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'Comments'
  }]
})

profileSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
})

profileSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);

}

const Profile = mongoose.model('Profile', profileSchema)

module.exports = Profile;