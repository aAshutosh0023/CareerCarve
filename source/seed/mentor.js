const mongoose = require('mongoose');
const Mentor = require('../models/mentor'); // Adjust the path if needed

// Dummy data for mentors with MBA-related expertise
const mentors = [
  {
    name: 'Dr. Alan Turing',
    expertise: ['Finance Management', 'Corporate Strategy'],
    
    availability: [
      {
        start_time: new Date('2024-08-15T09:00:00Z'),
        end_time: new Date('2024-08-15T12:00:00Z'),
        is_booked: false
      },
      {
        start_time: new Date('2024-08-16T14:00:00Z'),
        end_time: new Date('2024-08-16T17:00:00Z'),
        is_booked: false
      }
    ]
  },
  {
    name: 'Prof. Grace Hopper',
    expertise: ['Marketing', 'Product Management'],
    
    availability: [
      {
        start_time: new Date('2024-08-15T10:00:00Z'),
        end_time: new Date('2024-08-15T13:00:00Z'),
        is_booked: false
      },
      {
        start_time: new Date('2024-08-17T15:00:00Z'),
        end_time: new Date('2024-08-17T18:00:00Z'),
        is_booked: false
      }
    ]
  },
  {
    name: 'Dr. Ada Lovelace',
    expertise: ['Operations Management', 'Supply Chain'],
    
    availability: [
      {
        start_time: new Date('2024-08-15T11:00:00Z'),
        end_time: new Date('2024-08-15T14:00:00Z'),
        is_booked: false
      },
      {
        start_time: new Date('2024-08-16T09:00:00Z'),
        end_time: new Date('2024-08-16T12:00:00Z'),
        is_booked: false
      }
    ]
  },
  {
    name: 'Dr. Tim Berners-Lee',
    expertise: ['Business Analytics', 'Data Science'],
    
    availability: [
      {
        start_time: new Date('2024-08-15T12:00:00Z'),
        end_time: new Date('2024-08-15T15:00:00Z'),
        is_booked: false
      },
      {
        start_time: new Date('2024-08-17T13:00:00Z'),
        end_time: new Date('2024-08-17T16:00:00Z'),
        is_booked: false
      }
    ]
  },
  {
    name: 'Dr. Margaret Hamilton',
    expertise: ['Human Resources', 'Organizational Behavior'],
    
    availability: [
      {
        start_time: new Date('2024-08-15T13:00:00Z'),
        end_time: new Date('2024-08-15T16:00:00Z'),
        is_booked: false
      },
      {
        start_time: new Date('2024-08-16T10:00:00Z'),
        end_time: new Date('2024-08-16T13:00:00Z'),
        is_booked: false
      }
    ]
  },
  {
    name: 'Prof. John McCarthy',
    expertise: ['Entrepreneurship', 'Innovation Management'],
    
    availability: [
      {
        start_time: new Date('2024-08-15T14:00:00Z'),
        end_time: new Date('2024-08-15T17:00:00Z'),
        is_booked: false
      },
      {
        start_time: new Date('2024-08-16T11:00:00Z'),
        end_time: new Date('2024-08-16T14:00:00Z'),
        is_booked: false
      }
    ]
  },
  {
    name: 'Dr. Linus Torvalds',
    expertise: ['Financial Analysis', 'Investment Strategies'],
    
    availability: [
      {
        start_time: new Date('2024-08-15T15:00:00Z'),
        end_time: new Date('2024-08-15T18:00:00Z'),
        is_booked: false
      },
      {
        start_time: new Date('2024-08-17T12:00:00Z'),
        end_time: new Date('2024-08-17T15:00:00Z'),
        is_booked: false
      }
    ]
  },
  {
    name: 'Dr. Donald Knuth',
    expertise: ['Strategic Management', 'Leadership'],
    
    availability: [
      {
        start_time: new Date('2024-08-15T16:00:00Z'),
        end_time: new Date('2024-08-15T19:00:00Z'),
        is_booked: false
      },
      {
        start_time: new Date('2024-08-16T12:00:00Z'),
        end_time: new Date('2024-08-16T15:00:00Z'),
        is_booked: false
      }
    ]
  },
  {
    name: 'Dr. John von Neumann',
    expertise: ['Project Management', 'Risk Management'],
    
    availability: [
      {
        start_time: new Date('2024-08-15T17:00:00Z'),
        end_time: new Date('2024-08-15T20:00:00Z'),
        is_booked: false
      },
      {
        start_time: new Date('2024-08-16T13:00:00Z'),
        end_time: new Date('2024-08-16T16:00:00Z'),
        is_booked: false
      }
    ]
  },
  {
    name: 'Prof. Barbara Liskov',
    expertise: ['Sales Management', 'Customer Relationship Management'],
   
    availability: [
      {
        start_time: new Date('2024-08-15T18:00:00Z'),
        end_time: new Date('2024-08-15T21:00:00Z'),
        is_booked: false
      },
      {
        start_time: new Date('2024-08-16T14:00:00Z'),
        end_time: new Date('2024-08-16T17:00:00Z'),
        is_booked: false
      }
    ]
  },
  {
    name: 'Dr. Dennis Ritchie',
    expertise: ['Information Systems', 'Technology Management'],
    
    availability: [
      {
        start_time: new Date('2024-08-15T19:00:00Z'),
        end_time: new Date('2024-08-15T22:00:00Z'),
        is_booked: false
      },
      {
        start_time: new Date('2024-08-16T15:00:00Z'),
        end_time: new Date('2024-08-16T18:00:00Z'),
        is_booked: false
      }
    ]
  },
  {
    name: 'Prof. Richard Stallman',
    expertise: ['Innovation Management', 'Entrepreneurship'],
    
    availability: [
      {
        start_time: new Date('2024-08-15T20:00:00Z'),
        end_time: new Date('2024-08-15T23:00:00Z'),
        is_booked: false
      },
      {
        start_time: new Date('2024-08-16T16:00:00Z'),
        end_time: new Date('2024-08-16T19:00:00Z'),
        is_booked: false
      }
    ]
  },
  {
    name: 'Dr. Seymour Cray',
    expertise: ['Operations Management', 'Supply Chain'],
    
    availability: [
      {
        start_time: new Date('2024-08-15T21:00:00Z'),
        end_time: new Date('2024-08-16T00:00:00Z'),
        is_booked: false
      },
      {
        start_time: new Date('2024-08-16T17:00:00Z'),
        end_time: new Date('2024-08-16T20:00:00Z'),
        is_booked: false
      }
    ]
  },
  {
    name: 'Dr. Ken Thompson',
    expertise: ['Corporate Finance', 'Mergers and Acquisitions'],
    
    availability: [
      {
        start_time: new Date('2024-08-15T22:00:00Z'),
        end_time: new Date('2024-08-16T01:00:00Z'),
        is_booked: false
      },
      {
        start_time: new Date('2024-08-16T18:00:00Z'),
        end_time: new Date('2024-08-16T21:00:00Z'),
        is_booked: false
      }
    ]
  },
  {
    name: 'Prof. James Gosling',
    expertise: ['Marketing', 'Product Management'],
    
    availability: [
      {
        start_time: new Date('2024-08-15T23:00:00Z'),
        end_time: new Date('2024-08-16T02:00:00Z'),
        is_booked: false
      },
      {
        start_time: new Date('2024-08-16T19:00:00Z'),
        end_time: new Date('2024-08-16T22:00:00Z'),
        is_booked: false
      }
    ]
  },
  {
    name: 'Prof. Douglas Engelbart',
    expertise: ['Innovation Management', 'Leadership'],
    
    availability: [
      {
        start_time: new Date('2024-08-15T09:00:00Z'),
        end_time: new Date('2024-08-15T12:00:00Z'),
        is_booked: false
      },
      {
        start_time: new Date('2024-08-16T20:00:00Z'),
        end_time: new Date('2024-08-16T23:00:00Z'),
        is_booked: false
      }
    ]
  },
  {
    name: 'Dr. Claude Shannon',
    expertise: ['Business Analytics', 'Data Science'],
    
    availability: [
      {
        start_time: new Date('2024-08-15T10:00:00Z'),
        end_time: new Date('2024-08-15T13:00:00Z'),
        is_booked: false
      },
      {
        start_time: new Date('2024-08-17T15:00:00Z'),
        end_time: new Date('2024-08-17T18:00:00Z'),
        is_booked: false
      }
    ]
  },
  {
    name: 'Prof. Ivan Sutherland',
    expertise: ['Human Resources', 'Organizational Behavior'],
    
    availability: [
      {
        start_time: new Date('2024-08-15T11:00:00Z'),
        end_time: new Date('2024-08-15T14:00:00Z'),
        is_booked: false
      },
      {
        start_time: new Date('2024-08-16T09:00:00Z'),
        end_time: new Date('2024-08-16T12:00:00Z'),
        is_booked: false
      }
    ]
  },
  {
    name: 'Dr. E.F. Codd',
    expertise: ['Project Management', 'Risk Management'],
    
    availability: [
      {
        start_time: new Date('2024-08-15T12:00:00Z'),
        end_time: new Date('2024-08-15T15:00:00Z'),
        is_booked: false
      },
      {
        start_time: new Date('2024-08-17T13:00:00Z'),
        end_time: new Date('2024-08-17T16:00:00Z'),
        is_booked: false
      }
    ]
  },
  {
    name: 'Dr. John Backus',
    expertise: ['Sales Management', 'Customer Relationship Management'],
    
    availability: [
      {
        start_time: new Date('2024-08-15T13:00:00Z'),
        end_time: new Date('2024-08-15T16:00:00Z'),
        is_booked: false
      },
      {
        start_time: new Date('2024-08-16T10:00:00Z'),
        end_time: new Date('2024-08-16T13:00:00Z'),
        is_booked: false
      }
    ]
  },
  {
    name: 'Prof. Jean Sammet',
    expertise: ['Corporate Finance', 'Mergers and Acquisitions'],
    
    availability: [
      {
        start_time: new Date('2024-08-15T14:00:00Z'),
        end_time: new Date('2024-08-15T17:00:00Z'),
        is_booked: false
      },
      {
        start_time: new Date('2024-08-16T11:00:00Z'),
        end_time: new Date('2024-08-16T14:00:00Z'),
        is_booked: false
      }
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
