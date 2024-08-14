const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Student Schema
const studentSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    auto: true,  // Auto-generate a unique ObjectId for each user
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  }
}, {
  timestamps: false
});

// Create a model using the schema
const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
