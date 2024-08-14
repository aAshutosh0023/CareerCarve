const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Mentor Schema
const mentorSchema = new Schema({
  mentor_id: {
    type: Schema.Types.ObjectId,
    auto: true,  // Auto-generate a unique ObjectId for each mentor
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  expertise: {
    type: [String], // Array of strings to list areas of expertise
    required: true
  },
  bio: {
    type: String,
    required: true,
    trim: true
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

// Create a model using the schema
const Mentor = mongoose.model('Mentor', mentorSchema);

module.exports = Mentor;
