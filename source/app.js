const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const flash = require('connect-flash');
const ejsMate = require('ejs-mate');
const passport = require("passport");
const bodyParser = require('body-parser');
const LocalStrategy = require("passport-local");
const mentorRoutes = require('./routes/mentorRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const Student = require("./models/student.js");
const Mentor = require("./models/mentor.js");
const expressError = require('./utils/expressError.js');
const studentRouter = require("./routes/studentRoutes.js");
const mentorauthRouter = require("./routes/mentorauthRouter.js");
const sessionRoutes = require("./routes/sessionsRouter.js")

const app = express();
//const dbUrl = 'mongodb://127.0.0.1:27017/one2one';
const dbUrl = process.env.ATLASDB_URL ;
// Setup view engine
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const sessionOptions = {
  secret: 'secretkey',
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  }
};

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

// Passport configuration for Student
//passport.use('student-local', new LocalStrategy(Student.authenticate()));
passport.use('mentor-local', new LocalStrategy(Mentor.authenticate()));

//passport.serializeUser(Student.serializeUser());
passport.serializeUser(Mentor.serializeUser());

//passport.deserializeUser(Student.deserializeUser());
passport.deserializeUser(Mentor.deserializeUser());

// Passport configuration for Mentor



passport.use('student-local', new LocalStrategy(Student.authenticate()));
passport.use('mentor-local', new LocalStrategy(Mentor.authenticate()));

passport.serializeUser(function(user, done) {
  if (user instanceof Student) {
    done(null, { type: 'student', id: user._id });
  } else if (user instanceof Mentor) {
    done(null, { type: 'mentor', id: user._id });
  } else {
    done(new Error('Unknown user type'));
  }
});

passport.deserializeUser(function(obj, done) {
  if (obj.type === 'student') {
    Student.findById(obj.id, function(err, student) {
      done(err, student);
    });
  } else if (obj.type === 'mentor') {
    Mentor.findById(obj.id, function(err, mentor) {
      done(err, mentor);
    });
  } else {
    done(new Error('Unknown user type'));
  }
});


// Middleware for setting flash messages and current user
// Middleware for setting flash messages and current user
app.use((req, res, next) => {
  res.locals.successMsg = req.flash('successMsg');
  res.locals.errorMsg = req.flash('errorMsg');
  res.locals.isLoggedIn = req.isAuthenticated();
  res.locals.currentStudent = req.user && req.user instanceof Student ? req.user : null;
  res.locals.currentMentor = req.user && req.user instanceof Mentor ? req.user : null;
  next();
});

app.get('/', (req, res) => {
  res.redirect('/home');
});

// MongoDB connection
mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Database connected successfully'))
.catch(err => {
  console.error('Database connection error:', err);
  process.exit(1);
});

// Routes
app.use("/", studentRouter);
app.use("/authmentor", mentorauthRouter);
app.use('/mentors', mentorRoutes);
app.use('/payment', paymentRoutes);
app.use('/sessions', sessionRoutes);

app.get('/home', (req, res) => {
  res.render('home', { title: 'Welcome to the Homepage' });
});





// Error Handling Middleware
app.use((err, req, res, next) => {
  const { statusCode = 500, message = "Something went wrong!" } = err;
  res.status(statusCode).render("error.ejs", { message });
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
