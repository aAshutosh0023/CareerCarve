const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Session Schema
const sessionSchema = new Schema({

  student_id: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Student' // Reference to the student who booked the session
  },
  mentor_id: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Mentor' // Reference to the mentor for the session
  },
  start_time: {
    type: Date,
    required: true
  },
  end_time: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    enum: ['confirmed', 'canceled', 'pending'], // Possible statuses for the session
    default: 'pending'
  },
  additional_charge: {
    type: Number,
    default: 0 // Optional field to store any additional charge
  }
});

// Create a model using the schema
const Session = mongoose.model('Session', sessionSchema);

module.exports = Session;
