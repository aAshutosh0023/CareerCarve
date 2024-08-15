// middlewares/cacheCheck.js
const cache = require('./cache');

exports.checkStudentInCache = (req, res, next) => {
  const studentId = cache.get('studentId');

  if (studentId) {
    req.studentId = studentId; // Make studentId available to request object
    return next();
  }
  
  req.flash('errorMsg', 'You need to login first.');
  res.redirect('/login');
};
