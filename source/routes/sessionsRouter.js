const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../middlewares/auth'); // Middleware to ensure the user is authenticated
const sessionController = require('../controllers/sessionController');

// Route to view all sessions for the logged-in mentor
router.get('/', ensureAuthenticated, sessionController.getMentorSessions);

module.exports = router;
