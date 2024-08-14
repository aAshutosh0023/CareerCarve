// routes/mentorRoutes.js
const express = require('express');
const router = express.Router();
const mentorController = require('../controllers/mentorControllers'); // Adjust the path if needed

// Route to get mentors by domain
//router.get('/search', mentorController.getMentors);
router.get('/search', (req, res, next) => {
    console.log('Search route hit');
    next();
  }, mentorController.getMentors);

 


module.exports = router;
