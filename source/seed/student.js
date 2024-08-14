const mongoose = require('mongoose');
const Student = require('../models/student'); // Adjust the path if needed

// Dummy data for students
const students = [
  { name: 'Alice Johnson' },
  { name: 'Bob Smith' },
  { name: 'Charlie Brown' },
  { name: 'Diana Prince' },
  { name: 'Ethan Hunt' },
  { name: 'Fiona Gallagher' },
  { name: 'George Michael' },
  { name: 'Hannah Montana' },
  { name: 'Ian Curtis' },
  { name: 'Julia Roberts' }
];

const seedStudents = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect('mongodb://127.0.0.1:27017/one2one'
, { useNewUrlParser: true, useUnifiedTopology: true });
    
    // Clear existing students
   // await Student.deleteMany({});

    // Insert dummy students
    await Student.insertMany(students);

    console.log('Dummy students inserted successfully!');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error inserting dummy students:', error);
    mongoose.connection.close();
  }
};

seedStudents();
