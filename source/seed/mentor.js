const mongoose = require('mongoose');
const Mentor = require('../models/mentor'); // Adjust the path if needed

// Dummy data for mentors with MBA-related expertise
const mentors = [
  {
    username: "Amit Sharma",
    password: "password123",
    expertise: ["Finance and Control", "Operations Management"],
    availability: [
      {start_time: "2024-08-14T08:00:00Z", end_time: "2024-08-14T12:00:00Z", "is_booked": false},
      {start_time: "2024-08-14T13:00:00Z", end_time: "2024-08-14T17:00:00Z", "is_booked": false}
    ]
  },
  {
    username: "Priya Singh",
    password: "password123",
    expertise: ["Sales and Marketing", "Human Resources"],
    availability: [
      {start_time: "2024-08-14T08:00:00Z", end_time: "2024-08-14T12:00:00Z", "is_booked": false},
      {start_time: "2024-08-14T13:00:00Z", end_time: "2024-08-14T17:00:00Z", "is_booked": false}
    ]
  },
  {
    username: "Raj Patel",
    password: "password123",
    expertise: ["International Business", "Business Analytics"],
    availability: [
      {start_time: "2024-08-14T08:00:00Z", end_time: "2024-08-14T12:00:00Z", "is_booked": false},
      {start_time: "2024-08-14T13:00:00Z", end_time: "2024-08-14T17:00:00Z", "is_booked": false}
    ]
  },
  {
    username: "Sneha Gupta",
    password: "password123",
    expertise: ["Strategy and Leadership", "Information Technology"],
    availability: [
      {start_time: "2024-08-14T08:00:00Z", end_time: "2024-08-14T12:00:00Z", "is_booked": false},
      {start_time: "2024-08-14T13:00:00Z", end_time: "2024-08-14T17:00:00Z", "is_booked": false}
    ]
  },
  {
    username: "Vikram Mehta",
    password: "password123",
    expertise: ["Supply Chain Management", "Retail Management"],
    availability: [
      {start_time: "2024-08-14T08:00:00Z", end_time: "2024-08-14T12:00:00Z", "is_booked": false},
      {start_time: "2024-08-14T13:00:00Z", end_time: "2024-08-14T17:00:00Z", "is_booked": false}
    ]
  },
  {
    username: "Meera Joshi",
    password: "password123",
    expertise: ["Project Management", "Corporate Governance"],
    availability: [
      {start_time: "2024-08-14T08:00:00Z", end_time: "2024-08-14T12:00:00Z", "is_booked": false},
      {start_time: "2024-08-14T13:00:00Z", end_time: "2024-08-14T17:00:00Z", "is_booked": false}
    ]
  },
  {
    username: "Ravi Kumar",
    password: "password123",
    expertise: ["Risk Management", "Healthcare Management"],
    availability: [
      {start_time: "2024-08-14T08:00:00Z", end_time: "2024-08-14T12:00:00Z", "is_booked": false},
      {start_time: "2024-08-14T13:00:00Z", end_time: "2024-08-14T17:00:00Z", "is_booked": false}
    ]
  },
  {
    username: "Sonia Kapoor",
    password: "password123",
    expertise: ["Hospitality Management", "Innovation Management"],
    availability: [
      {start_time: "2024-08-14T08:00:00Z", end_time: "2024-08-14T12:00:00Z", "is_booked": false},
      {start_time: "2024-08-14T13:00:00Z", end_time: "2024-08-14T17:00:00Z", "is_booked": false}
    ]
  },
  {
    username: "Amit Patel",
    password: "password123",
    expertise: ["Business Ethics", "Public Administration"],
    availability: [
      {start_time: "2024-08-14T08:00:00Z", end_time: "2024-08-14T12:00:00Z", "is_booked": false},
      {start_time: "2024-08-14T13:00:00Z", end_time: "2024-08-14T17:00:00Z", "is_booked": false}
    ]
  },
  {
    username: "Pooja Agarwal",
    password: "password123",
    expertise: ["Real Estate Management", "E-Commerce"],
    availability: [
      {start_time: "2024-08-14T08:00:00Z", end_time: "2024-08-14T12:00:00Z", "is_booked": false},
      {start_time: "2024-08-14T13:00:00Z", end_time: "2024-08-14T17:00:00Z", "is_booked": false}
    ]
  },
  {
    username: "Karan Sharma",
    password: "password123",
    expertise: ["Family Business Management", "Management Consulting"],
    availability: [
      {start_time: "2024-08-14T08:00:00Z", end_time: "2024-08-14T12:00:00Z", "is_booked": false},
      {start_time: "2024-08-14T13:00:00Z", end_time: "2024-08-14T17:00:00Z", "is_booked": false}
    ]
  },
  {
    username: "Neha Sharma",
    password: "password123",
    expertise: ["Investment Banking", "Banking and Financial Services"],
    availability: [
      {start_time: "2024-08-14T08:00:00Z", end_time: "2024-08-14T12:00:00Z", "is_booked": false},
      {start_time: "2024-08-14T13:00:00Z", end_time: "2024-08-14T17:00:00Z", "is_booked": false}
    ]
  },
  {
    username: "Arjun Singh",
    password: "password123",
    expertise: ["Media and Entertainment Management", "Telecommunications Management"],
    availability: [
      {start_time: "2024-08-14T08:00:00Z", end_time: "2024-08-14T12:00:00Z", "is_booked": false},
      {start_time: "2024-08-14T13:00:00Z", end_time: "2024-08-14T17:00:00Z", "is_booked": false}
    ]
  },
  {
    username: "Ritika Mehta",
    password: "password123",
    expertise: ["Education Management", "Agribusiness Management"],
    availability: [
      {start_time: "2024-08-14T08:00:00Z", end_time: "2024-08-14T12:00:00Z", "is_booked": false},
      {start_time: "2024-08-14T13:00:00Z", end_time: "2024-08-14T17:00:00Z", "is_booked": false}
    ]
  },
  {
    username: "Ankit Kumar",
    password: "password123",
    expertise: ["Nonprofit Management", "Luxury Brand Management"],
    availability: [
      {start_time: "2024-08-14T08:00:00Z", end_time: "2024-08-14T12:00:00Z", "is_booked": false},
      {start_time: "2024-08-14T13:00:00Z", end_time: "2024-08-14T17:00:00Z", "is_booked": false}
    ]
  },
  {
    username: "Swati Verma",
    password: "password123",
    expertise: ["Legal and Regulatory Affairs", "Business Ethics"],
    availability: [
      {start_time: "2024-08-14T08:00:00Z", end_time: "2024-08-14T12:00:00Z", "is_booked": false},
      {start_time: "2024-08-14T13:00:00Z", end_time: "2024-08-14T17:00:00Z", "is_booked": false}
    ]
  },
  {
    username: "Nikhil Joshi",
    password: "password123",
    expertise: ["Retail Management", "Supply Chain Management"],
    availability: [
      {start_time: "2024-08-14T08:00:00Z", end_time: "2024-08-14T12:00:00Z", "is_booked": false},
      {start_time: "2024-08-14T13:00:00Z", end_time: "2024-08-14T17:00:00Z", "is_booked": false}
    ]
  },
  {
    username: "Ravi Patel",
    password: "password123",
    expertise: ["International Business", "Human Resources"],
    availability: [
      {start_time: "2024-08-14T08:00:00Z", end_time: "2024-08-14T12:00:00Z", "is_booked": false},
      {start_time: "2024-08-14T13:00:00Z", end_time: "2024-08-14T17:00:00Z", "is_booked": false}
    ]
  },
  {
    username: "Pallavi Agarwal",
    password: "password123",
    expertise: ["Innovation Management", "Healthcare Management"],
    availability: [
      {start_time: "2024-08-14T08:00:00Z", end_time: "2024-08-14T12:00:00Z", "is_booked": false},
      {start_time: "2024-08-14T13:00:00Z", end_time: "2024-08-14T17:00:00Z", "is_booked": false}
    ]
  },
  {
    username: "Arjun Mehta",
    password: "password123",
    expertise: ["Business Analytics", "Sales and Marketing"],
    availability: [
      {start_time: "2024-08-14T08:00:00Z", end_time: "2024-08-14T12:00:00Z", "is_booked": false},
      {start_time: "2024-08-14T13:00:00Z", end_time: "2024-08-14T17:00:00Z", "is_booked": false}
    ]
  },
  {
    username: "Sonali Kumar",
    password: "password123",
    expertise: ["Retail Management", "Project Management"],
    availability: [
      {start_time: "2024-08-14T08:00:00Z", end_time: "2024-08-14T12:00:00Z", "is_booked": false},
      {start_time: "2024-08-14T13:00:00Z", end_time: "2024-08-14T17:00:00Z", "is_booked": false}
    ]
  },
  {
    username: "Kriti Singh",
    password: "password123",
    expertise: ["Finance and Control", "Supply Chain Management"],
    availability: [
      {start_time: "2024-08-14T08:00:00Z", end_time: "2024-08-14T12:00:00Z", "is_booked": false},
      {start_time: "2024-08-14T13:00:00Z", end_time: "2024-08-14T17:00:00Z", "is_booked": false}
    ]
  },
  {
    username: "Ramesh Agarwal",
    password: "password123",
    expertise: ["Operations Management", "Healthcare Management"],
    availability: [
      {start_time: "2024-08-14T08:00:00Z", end_time: "2024-08-14T12:00:00Z", "is_booked": false},
      {start_time: "2024-08-14T13:00:00Z", end_time: "2024-08-14T17:00:00Z", "is_booked": false}
    ]
  },
  {
    username: "Neelam Kapoor",
    password: "password123",
    expertise: ["Human Resources", "Business Analytics"],
    availability: [
      {start_time: "2024-08-14T08:00:00Z", end_time: "2024-08-14T12:00:00Z", "is_booked": false},
      {start_time: "2024-08-14T13:00:00Z", end_time: "2024-08-14T17:00:00Z", "is_booked": false}
    ]
  },
  {
    username: "Rajat Sharma",
    password: "password123",
    expertise: ["Corporate Governance", "E-Commerce"],
    availability: [
      {start_time: "2024-08-14T08:00:00Z", end_time: "2024-08-14T12:00:00Z", "is_booked": false},
      {start_time: "2024-08-14T13:00:00Z", end_time: "2024-08-14T17:00:00Z", "is_booked": false}
    ]
  },
  {
    username: "Priti Verma",
    password: "password123",
    expertise: ["Legal and Regulatory Affairs", "Innovation Management"],
    availability: [
      {start_time: "2024-08-14T08:00:00Z", end_time: "2024-08-14T12:00:00Z", "is_booked": false},
      {start_time: "2024-08-14T13:00:00Z", end_time: "2024-08-14T17:00:00Z", "is_booked": false}
    ]
  },
  {
    username: "Amit Joshi",
    password: "password123",
    expertise: ["Public Administration", "Luxury Brand Management"],
    availability: [
      {start_time: "2024-08-14T08:00:00Z", end_time: "2024-08-14T12:00:00Z", "is_booked": false},
      {start_time: "2024-08-14T13:00:00Z", end_time: "2024-08-14T17:00:00Z", "is_booked": false}
    ]
  },
  {
    username: "Simran Kapoor",
    password: "password123",
    expertise: ["Family Business Management", "Banking and Financial Services"],
    availability: [
      {start_time: "2024-08-14T08:00:00Z", end_time: "2024-08-14T12:00:00Z", "is_booked": false},
      {start_time: "2024-08-14T13:00:00Z", end_time: "2024-08-14T17:00:00Z", "is_booked": false}
    ]
  },
  {
    username: "Tarun Mehta",
    password: "password123",
    expertise: ["Media and Entertainment Management", "Project Management"],
    availability: [
      {start_time: "2024-08-14T08:00:00Z", end_time: "2024-08-14T12:00:00Z", "is_booked": false},
      {start_time: "2024-08-14T13:00:00Z", end_time: "2024-08-14T17:00:00Z", "is_booked": false}
    ]
  },
  {
    username: "Riya Sharma",
    password: "password123",
    expertise: ["Telecommunications Management", "Business Ethics"],
    availability: [
      {start_time: "2024-08-14T08:00:00Z", end_time: "2024-08-14T12:00:00Z", "is_booked": false},
      {start_time: "2024-08-14T13:00:00Z", end_time: "2024-08-14T17:00:00Z", "is_booked": false}
    ]
  },
  {
    username: "Akash Gupta",
    password: "password123",
    expertise: ["International Business", "Retail Management"],
    availability: [
      {start_time: "2024-08-14T08:00:00Z", end_time: "2024-08-14T12:00:00Z", "is_booked": false},
      {start_time: "2024-08-14T13:00:00Z", end_time: "2024-08-14T17:00:00Z", "is_booked": false}
    ]
  },
  {
    username: "Meera Sinha",
    password: "password123",
    expertise: ["Corporate Governance", "Innovation Management"],
    availability: [
      {start_time: "2024-08-14T08:00:00Z", end_time: "2024-08-14T12:00:00Z", "is_booked": false},
      {start_time: "2024-08-14T13:00:00Z", end_time: "2024-08-14T17:00:00Z", "is_booked": false}
    ]
  },
  {
    username: "Karan Singh",
    password: "password123",
    expertise: ["Sales and Marketing", "Public Administration"],
    availability: [
      {start_time: "2024-08-14T08:00:00Z", end_time: "2024-08-14T12:00:00Z", "is_booked": false},
      {start_time: "2024-08-14T13:00:00Z", end_time: "2024-08-14T17:00:00Z", "is_booked": false}
    ]
  },
  {
    username: "Shruti Sharma",
    password: "password123",
    expertise: ["Luxury Brand Management", "Telecommunications Management"],
    availability: [
      {start_time: "2024-08-14T08:00:00Z", end_time: "2024-08-14T12:00:00Z", "is_booked": false},
      {start_time: "2024-08-14T13:00:00Z", end_time: "2024-08-14T17:00:00Z", "is_booked": false}
    ]
  },
  {
    username: "Ankit Patel",
    password: "password123",
    expertise: ["Healthcare Management", "Banking and Financial Services"],
    availability: [
      {start_time: "2024-08-14T08:00:00Z", end_time: "2024-08-14T12:00:00Z", "is_booked": false},
      {start_time: "2024-08-14T13:00:00Z", end_time: "2024-08-14T17:00:00Z", "is_booked": false}
    ]
  },
  {
    username: "Neha Kumar",
    password: "password123",
    expertise: ["Banking and Financial Services", "E-Commerce"],
    availability: [
      {start_time: "2024-08-14T08:00:00Z", end_time: "2024-08-14T12:00:00Z", "is_booked": false},
      {start_time: "2024-08-14T13:00:00Z", end_time: "2024-08-14T17:00:00Z", "is_booked": false}
    ]
  },
  {
    username: "Ritika Gupta",
    password: "password123",
    expertise: ["Telecommunications Management", "Media and Entertainment Management"],
    availability: [
      {start_time: "2024-08-14T08:00:00Z", end_time: "2024-08-14T12:00:00Z", "is_booked": false},
      {start_time: "2024-08-14T13:00:00Z", end_time: "2024-08-14T17:00:00Z", "is_booked": false}
    ]
  },
  {
    username: "Sandeep Sharma",
    password: "password123",
    expertise: ["Finance and Control", "Luxury Brand Management"],
    availability: [
      {start_time: "2024-08-14T08:00:00Z", end_time: "2024-08-14T12:00:00Z", "is_booked": false},
      {start_time: "2024-08-14T13:00:00Z", end_time: "2024-08-14T17:00:00Z", "is_booked": false}
    ]
  },
  {
    username: "Sonal Kapoor",
    password: "password123",
    expertise: ["Business Analytics", "Public Administration"],
    availability: [
      {start_time: "2024-08-14T08:00:00Z", end_time: "2024-08-14T12:00:00Z", "is_booked": false},
      {start_time: "2024-08-14T13:00:00Z", end_time: "2024-08-14T17:00:00Z", "is_booked": false}
    ]
  },
    {
      username: "Ashu",
      password: "123",
      expertise: ["Business Ethics", "Innovation Management"],
      availability: [
        {start_time: "2024-08-14T08:00:00Z", end_time: "2024-08-14T12:00:00Z", "is_booked": false},
        {start_time: "2024-08-14T13:00:00Z", end_time: "2024-08-14T17:00:00Z", "is_booked": false}
      ]
    },
    {
      username: "ash",
      password: "123",
      expertise: ["Media and Entertainment Management", "Retail Management"],
      availability: [
        {start_time: "2024-08-14T08:00:00Z", end_time: "2024-08-14T12:00:00Z", "is_booked": false},
        {start_time: "2024-08-14T13:00:00Z", end_time: "2024-08-14T17:00:00Z", "is_booked": false}
      ]
    },
    {
      username: "admin",
      password: "123",
      expertise: ["Corporate Governance", "Public Administration"],
      availability: [
        {start_time: "2024-08-14T08:00:00Z", end_time: "2024-08-14T12:00:00Z", "is_booked": false},
        {start_time: "2024-08-14T13:00:00Z", end_time: "2024-08-14T17:00:00Z", "is_booked": false}
      ]
    },
    {
      username: "vishu",
      password: "123",
      expertise: ["Sales and Marketing", "E-Commerce"],
      availability: [
        {start_time: "2024-08-14T08:00:00Z", end_time: "2024-08-14T12:00:00Z", "is_booked": false},
        {start_time: "2024-08-14T13:00:00Z", end_time: "2024-08-14T17:00:00Z", "is_booked": false}
      ]
    },
    {
      username: "Ashutosh Singh",
      password: "123",
      expertise: ["Finance and Control", "Healthcare Management"],
      availability: [
        {start_time: "2024-08-14T08:00:00Z", end_time: "2024-08-14T12:00:00Z", "is_booked": false},
        {start_time: "2024-08-14T13:00:00Z", end_time: "2024-08-14T17:00:00Z", "is_booked": false}
      ]
    },
    {
      username: "Ashok Kumar",
      password: "123",
      expertise: ["Business Analytics", "Innovation Management"],
      availability: [
        {start_time: "2024-08-14T08:00:00Z", end_time: "2024-08-14T12:00:00Z", "is_booked": false},
        {start_time: "2024-08-14T13:00:00Z", end_time: "2024-08-14T17:00:00Z", "is_booked": false}
      ]
    },
    {
      username: "Ashutosh Gupta",
      password: "123",
      expertise: ["Media and Entertainment Management", "Retail Management"],
      availability: [
        {start_time: "2024-08-14T08:00:00Z", end_time: "2024-08-14T12:00:00Z", "is_booked": false},
        {start_time: "2024-08-14T13:00:00Z", end_time: "2024-08-14T17:00:00Z", "is_booked": false}
      ]
    },
    {
      username: "Admin Kumar",
      password: "123",
      expertise: ["Banking and Financial Services", "Corporate Governance"],
      availability: [
        {start_time: "2024-08-14T08:00:00Z", end_time: "2024-08-14T12:00:00Z", "is_booked": false},
        {start_time: "2024-08-14T13:00:00Z", end_time: "2024-08-14T17:00:00Z", "is_booked": false}
      ]
    },
    {
      username: "Vishal Sinha",
      password: "123",
      expertise: ["Healthcare Management", "Public Administration"],
      availability: [
        {start_time: "2024-08-14T08:00:00Z", end_time: "2024-08-14T12:00:00Z", "is_booked": false},
        {start_time: "2024-08-14T13:00:00Z", end_time: "2024-08-14T17:00:00Z", "is_booked": false}
      ]
    },
    {
      username: "Ashu Sharma",
      password: "123",
      expertise: ["Luxury Brand Management", "Sales and Marketing"],
      availability: [
        {start_time: "2024-08-14T08:00:00Z", end_time: "2024-08-14T12:00:00Z", "is_booked": false},
        {start_time: "2024-08-14T13:00:00Z", end_time: "2024-08-14T17:00:00Z", "is_booked": false}
      ]
    },
    {
      username: "Ash Kumar",
      password: "123",
      expertise: ["E-Commerce", "Innovation Management"],
      availability: [
        {start_time: "2024-08-14T08:00:00Z", end_time: "2024-08-14T12:00:00Z", "is_booked": false},
        {start_time: "2024-08-14T13:00:00Z", end_time: "2024-08-14T17:00:00Z", "is_booked": false}
      ]
    },
    {
      username: "Ashutosh Patel",
      password: "123",
      expertise: ["Business Ethics", "Retail Management"],
      availability: [
        {start_time: "2024-08-14T08:00:00Z", end_time: "2024-08-14T12:00:00Z", "is_booked": false},
        {start_time: "2024-08-14T13:00:00Z", end_time: "2024-08-14T17:00:00Z", "is_booked": false}
      ]
    },
    {
      username: "Vishu Sharma",
      password: "123",
      expertise: ["Telecommunications Management", "Business Analytics"],
      availability: [
        {start_time: "2024-08-14T08:00:00Z", end_time: "2024-08-14T12:00:00Z", "is_booked": false},
        {start_time: "2024-08-14T13:00:00Z", end_time: "2024-08-14T17:00:00Z", "is_booked": false}
      ]
    },
    {
      username: "Ashu Patel",
      password: "123",
      expertise: ["Finance and Control", "Healthcare Management"],
      availability: [
        {start_time: "2024-08-14T08:00:00Z", end_time: "2024-08-14T12:00:00Z", "is_booked": false},
        {start_time: "2024-08-14T13:00:00Z", end_time: "2024-08-14T17:00:00Z", "is_booked": false}
      ]
    }
];


const seedMentors = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect('mongodb://127.0.0.1:27017/one2one', { useNewUrlParser: true, useUnifiedTopology: true });
    
    // Clear existing mentors
    await Mentor.deleteMany({});

    // Insert dummy mentors
    await Mentor.insertMany(mentors);

    console.log('Dummy mentors inserted successfully!');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error inserting dummy mentors:', error);
    mongoose.connection.close();
  }
};

seedMentors();
