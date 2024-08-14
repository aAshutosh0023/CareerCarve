const Session = require('../models/session');

// Controller function to get and render session details for the logged-in mentor
exports.getMentorSessions = async (req, res) => {
    try {
        // Get the logged-in mentor's ID
        const mentorId = req.user._id;

        // Fetch all sessions for the logged-in mentor
        const sessions = await Session.find({ mentor_id: mentorId });

        // Render the sessions view and pass the sessions data
        res.render('sessions', { sessions });
    } catch (error) {
        console.error('Error fetching mentor sessions:', error);
        res.status(500).send('Internal Server Error');
    }
};
