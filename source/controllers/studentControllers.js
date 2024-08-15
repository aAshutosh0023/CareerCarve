const Student = require("../models/student.js");

//signup form
module.exports.signupForm=(req,res)=>{ res.render("students/signup.ejs");
}
module.exports.logIn = async(req,res)=>{
  req.flash("successMsg","Welcome back to CareerCarve");
   if(res.locals.redirectUrl){ //agar redirect path khali nhi aaya toh ..
    return res.redirect(res.locals.redirectUrl);
   }
  res.redirect("/home");  
   //nahi toh listings par jana..
                          /* or you can write
  let redirectUrl = res.locals.redirectUrl || "/listings"; 

  res.redirect(redirectUrl);*/
}

//signup
module.exports.signup=async(req,res)=>{
    try{ let{username,email,password}= req.body
    const newStudent =  new Student({email,username});

   const registeredStudent =  await Student.register(newStudent,password);

   console.log(newStudent);
     
          //sign up krte e user auto login ho jaye..
        req.login(registeredStudent,(err)=> { 
          if (err) 
          {
          return next(err);
             }
       
          res.redirect("/home");
      } );
     
  }
    catch(error){
        req.flash("errorMsg",error.message);
        res.redirect("/signup");
    }       
  }

 //login form
  module.exports.loginForm =(req,res)=>{
    res.render("students/login.ejs");
}

//login



module.exports.logOut = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }

    // Clear all cookies
    res.clearCookie('connect.sid'); // For session cookie (if you're using express-session)
    // Add any other cookies you want to clear here

    req.flash('successMsg', 'Successfully logged you out!');
    res.redirect('/login');
  });
};
