const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require('../utils/wrapAsync.js');
const passport = require("passport");
const mentorController = require("../controllers/mentorauthcontrollers.js");

// Route for mentor signup
router.route("/signup")
  .get(mentorController.signupForm)  // Show signup form
  .post(wrapAsync(mentorController.signup));  // Handle signup

// Route for mentor login
router.route("/login")
  .get(mentorController.loginForm)  // Show login form
  .post((req, res, next) => {
    passport.authenticate("mentor-local", (err, mentor, info) => {
      if (err) {
        return next(err);
      }
      if (!mentor) {
        req.flash("errorMsg", info.message); // Flash error message
        return res.redirect("/authmentor/login");
      }
      req.logIn(mentor, (err) => {
        if (err) {
          return next(err);
        }
        res.cookie('mentorId', mentor._id.toString(), { httpOnly: true });
        req.flash("successMsg", "Welcome to CoLab"); // Flash success message
        return res.redirect("/sessions");
      });
    })(req, res, next);
  });

// Route for mentor logout
router.get("/logout", wrapAsync(mentorController.logOut));

module.exports = router;
