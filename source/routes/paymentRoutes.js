const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentControllers');

// Route to render the payment page
router.get('/', paymentController.showPaymentPage);

// Route to process payment and store session details
router.post('/process', paymentController.processPayment);

// Route to display the booked page
router.get('/booked', paymentController.showBookedPage);

module.exports = router;
