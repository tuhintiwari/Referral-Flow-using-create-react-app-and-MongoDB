const mongoose = require('mongoose');
const { Schema } = mongoose;    // same as const Schema = mongoose.Schema

const userSchema = new Schema({
  googleId : String
});

mongoose.model('users', userSchema);    // it will create this collection(users) only if it doesn't already exist
