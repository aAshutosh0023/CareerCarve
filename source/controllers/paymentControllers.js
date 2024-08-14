// Import the Session model
const Session = require('../models/session');

// Function to parse cookies from the header
function parseCookies(cookieHeader) {
    if (!cookieHeader) return {};
    return cookieHeader.split(';').reduce((cookies, cookieString) => {
        const [name, value] = cookieString.trim().split('=');
        cookies[name] = decodeURIComponent(value); // Decode URI components in cookies
        return cookies;
    }, {});
}

// Show the payment page with details passed via cookies
exports.showPaymentPage = (req, res) => {
    try {
        const cookies = parseCookies(req.headers.cookie || '');
        const { mentorId, startTime, endTime } = cookies;

        if (!mentorId || !startTime || !endTime) {
            req.flash('errorMsg', 'Missing necessary session details.');
            return res.redirect('/some-error-page'); // Adjust redirect as necessary
        }

        res.render('payment', {
            mentorId,
            startTime,
            endTime,
            additionalCharge: 50 // Set or calculate this value as needed
        });
    } catch (error) {
        console.error('Error rendering payment page:', error);
        res.status(500).send('Internal Server Error');
    }
};

// Process payment and store session details
exports.processPayment = async (req, res) => {
    try {
        // Parse cookies to get studentId, mentorId, startTime, and endTime
        const cookies = parseCookies(req.headers.cookie || '');
        const { studentId, mentorId, startTime, endTime } = cookies;

        if (!studentId || !mentorId || !startTime || !endTime) {
            return res.status(400).send('Missing session details');
        }
        
        // Create a new session
        const newSession = new Session({
            student_id: studentId, // Retrieved from cookies
            mentor_id: mentorId,   // Retrieved from cookies
            start_time: new Date(startTime),
            end_time: new Date(endTime),
            status: 'confirmed',
            additional_charge: req.body.additionalCharge || 50
        });

        // Save the session to the database
        await newSession.save();

        // Clear the cookies after saving the session
        res.clearCookie('studentId');
        res.clearCookie('mentorId');
        res.clearCookie('startTime');
        res.clearCookie('endTime');

        // Redirect to the booked page or any other confirmation page
        res.redirect('/payment/booked');
    } catch (error) {
        console.error('Error processing payment:', error);
        res.status(500).send('Internal Server Error');
    }
};

// Show the booked confirmation page
exports.showBookedPage = (req, res) => {
    res.render('booked'); // Ensure 'booked.ejs' exists in the 'views' folder
};
