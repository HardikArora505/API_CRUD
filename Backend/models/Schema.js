const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 50
  },
  age: {
    type: Number,
    required: true,
    min: 19
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
    match: /^\S+@\S+\.\S+$/
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other'],
    required: true
  },
  mobileNumber: {
    type: String,
    required: true,
    trim: true,
    match: /^\d{10}$/
  },
  birthday: {
    type: Date,
    required: true,
    match: /^(\d{2})-(\d{2})-(\d{4})$/
  },
  city: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 50
  },
  state: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 50
  },
  country: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 50
  },
  address1: {
    type: String,
    required: true,
    trim: true,
    minlength: 5,
    maxlength: 100
  },
  address2: {
    type: String,
    trim: true,
    maxlength: 100
  }
},{timestamps:true});

module.exports = mongoose.model('User', userSchema);
