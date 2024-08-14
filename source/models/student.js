const mongoose = require("mongoose");
const passport = require("passport");

const Schema = mongoose.Schema;

const passportLocalMongoose = require("passport-local-mongoose");

const studentSchema = new Schema({
    email:{
        type:String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,  // Ensure username is unique
        validate: {
            validator: function(value) {
                // Custom validation function to check if the username is not all whitespace
                return value.trim() !== "";
            },
            message: "please fill valid username!",
        }
    }


});  //no need to add username and password..by default will be add by the passportLocalMongoose plugin that we are using.

studentSchema.plugin(passportLocalMongoose, {
    usernameField: 'username',  // Specify the custom username field
    passwordValidator: function(password, cb) {
        // Custom password validator function to check that the password is not all whitespace
        if (password.trim() === "") {
            return cb(new Error("please fill valid password!"));
        }
        // If the password is valid (not all whitespace), return true
        return cb(null, true);
    }
});



module.exports = mongoose.model("Student",studentSchema);