const express = require("express");
const router = express.Router({mergeParams: true});


const wrapAsync = require('../utils/wrapAsync.js');

const passport = require("passport");


const studentController = require("../controllers/studentControllers.js")


  router.route("/signup")
  .get(studentController.signupForm)  //signup form
  .post(wrapAsync(studentController.signup))  //signup
  

 
 
  /*router.route("/login")
  .get(userController.loginForm)   //for login form
  .post(   //login
       passport.authenticate("local",{  
         failureRedirect: "/login",
         failureFlash: true,
       
    }),userController.logIn); */

    router.route("/login")
    .get(studentController.loginForm)   // Render login form
    .post((req, res, next) => {
        passport.authenticate("student-local", (err, student, info) => {
            if (err) {
                return next(err);
            }
            if (!student) {
                req.flash("errorMsg", info.message); // Flash error message
                return res.redirect("/login");
            }
            req.logIn(student, (err) => {
                if (err) {
                    return next(err);
                }
                res.cookie('studentId', student._id.toString(), { httpOnly: true });
                req.flash("successMsg", "Welcome to CareerCarve"); // Flash success message
                
                return res.redirect("/home");
            });
        })(req, res, next);
    });


   
    router.get("/logout",studentController.logOut);
  
    
  module.exports = router;