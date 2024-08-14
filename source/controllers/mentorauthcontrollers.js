const Mentor = require("../models/mentor.js");


module.exports.signupForm=(req,res)=>{ res.render("mentor/signup.ejs");
}



//signup
module.exports.signup=async(req,res)=>{
    try{ let{username,email,password}= req.body
    const newMentor =  new Mentor({email,username});

   const registeredMentor =  await Mentor.register(newMentor,password);

   console.log(newMentor);
     
          //sign up krte e user auto login ho jaye..
        req.login(registeredMentor,(err)=> { 
          if (err) 
          {
          return next(err);
             }
       
          res.redirect("/sessions");
      } );
     
  }
    catch(error){
        req.flash("errorMsg",error.message);
        res.redirect("/authmentor/signup");
    }       
  }

 //login form
  module.exports.loginForm =(req,res)=>{
    res.render("mentor/login.ejs");
}

//login



//logout
   module.exports.logOut=(req,res)=>{
    req.logout((err)=> { 
      if (err) 
      {
      return next(err);
         }
         req.flash("successMsg","Successfully logged you out!")
      res.redirect("/authmentor/login");
    } );
  }