// models/mentor.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

// Define the Mentor Schema
const mentorSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
  },
  expertise: {
    type: [String], // Array of strings to list areas of expertise
    required: true
  },
  availability: [{
    start_time: {
      type: Date,
      required: true
    },
    end_time: {
      type: Date,
      required: true
    },
    is_booked: {
      type: Boolean,
      default: false
    }
  }]
});

mentorSchema.plugin(passportLocalMongoose, {
  usernameField: 'username',
  passwordValidator: function(password, cb) {
    if (password.trim() === "") {
      return cb(new Error("please fill valid password!"));
    }
    return cb(null, true);
  }
});

module.exports = mongoose.model("Mentor", mentorSchema);
