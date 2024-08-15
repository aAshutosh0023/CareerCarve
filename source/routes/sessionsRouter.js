const express = require('express');
const router = express.Router();
const cache = require('../middlewares/cache'); // Adjust path to your actual cache file
const sessionController = require('../controllers/sessionController');

// Middleware to check if the student is in the cache
router.use(async (req, res, next) => {
    const studentId = req.cookies.studentId; // Adjust based on your actual cookie setup

    if (studentId) {
        try {
            const isLoggedIn = await cache.checkStudentInCache(studentId);
            if (isLoggedIn) {
                return next(); // Proceed to the route
            }
        } catch (error) {
            console.error('Cache check error:', error);
        }
    }

    // Redirect to login if not in cache
    req.flash('errorMsg', 'You have to log in first.');
    res.redirect('/login');
});

// Route to view all sessions for the logged-in mentor
router.get('/', sessionController.getMentorSessions);

module.exports = router;
