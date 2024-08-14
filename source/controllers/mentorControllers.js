const Mentor = require('../models/mentor'); // Adjust the path if needed

exports.getMentors = async (req, res) => {
  try {
    const { domain, premium } = req.query;
    const isPremium = premium === 'on';

    if (!domain) {
      req.flash('errorMsg', 'Domain is required for searching mentors.');
      return res.redirect('/home');
    }

    console.log('Domain:', domain); // Log the domain parameter
    console.log('Premium Status:', isPremium); // Log the premium status

    let mentors;

    if (isPremium) {
      // For premium users, fetch all mentors with the specified domain and availability
      mentors = await Mentor.find({
        expertise: domain,
        'availability.is_booked': false, // Fetch mentors with unbooked availability
      });

      console.log('Mentors for Premium:', mentors); // Log the mentors found
    } else {
      // For non-premium users, fetch only one available mentor
      const availableMentor = await Mentor.findOne({
        expertise: domain,
        'availability.is_booked': false, // Fetch one mentor with unbooked availability
      }).sort({ 'availability.start_time': 1 }); // Optionally, you can sort by start time

      if (availableMentor) {
        mentors = [availableMentor]; // Ensure only one mentor is passed
        console.log('Available Mentor for Non-Premium:', availableMentor);
      } else {
        console.log('No available mentors found for non-premium user');
        req.flash('errorMsg', 'No available mentors found for this domain.');
        return res.redirect('/home');
      }
    }

    // Ensure the mentors array is always defined
    mentors = mentors || [];

    // Render the mentor list page with the mentors and isPremium flag
    res.render('mentor/mentorList', { domain, mentors, isPremium });

  } catch (error) {
    console.error('Error fetching mentors:', error);
    req.flash('errorMsg', 'An error occurred while fetching mentors.');
    res.redirect('/home');
  }
};




exports.getMentorDetails = async (req, res) => {
  try {
    const mentorId = req.params.id;
    const mentor = await Mentor.findById(mentorId);

    if (!mentor) {
      req.flash('errorMsg', 'Mentor not found.');
      return res.redirect('/home');
    }

    res.render('mentor/mentorDetails', { mentor,
            userId: "someUserId",
            startTime: "2024-08-14T10:00:00Z", 
            endTime: "2024-08-14T11:00:00Z", 
            additionalCharge: 500

     });
  } catch (error) {
    console.error('Error fetching mentor details:', error);
    req.flash('errorMsg', 'An error occurred while fetching mentor details.');
    res.redirect('/home');
  }
};
