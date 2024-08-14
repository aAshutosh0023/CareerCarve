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
      // For premium users, fetch all mentors with the specified domain
      mentors = await Mentor.find({
        expertise: domain,
        'availability.is_booked': false,
      });

      console.log('Mentors for Premium:', mentors); // Log the mentors found
    } else {
      // For non-premium users, fetch only one available mentor
      const availableMentor = await Mentor.findOne({
        expertise: domain,
        'availability.is_booked': false,
       // 'availability.start_time': { $lte: new Date() },
        //'availability.end_time': { $gte: new Date() }
      });

      if (availableMentor) {
        mentors = [availableMentor];
        console.log('Available Mentor for Non-Premium:', availableMentor);
      } else {
        console.log('No available mentors found for non-premium user');
        req.flash('errorMsg', 'No available mentors found for this domain.');
        return res.redirect('/home');
      }
    }

    // Render the mentor list page with the mentors
    res.render('mentor/mentorList', { domain, mentors });

  } catch (error) {
    console.error('Error fetching mentors:', error);
    req.flash('errorMsg', 'An error occurred while fetching mentors.');
    res.redirect('/home');
  }
};
