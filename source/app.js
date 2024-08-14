const path = require('path');
//require('dotenv').config({ path: path.join(__dirname, '../.env') });
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const flash = require('connect-flash');
const ejsMate = require('ejs-mate');
const mentorRoutes = require('./routes/mentorRoutes');

const app = express();

//const methodOverride = require('method-override');
//const cors = require('cors');
const bodyParser = require('body-parser');
//const authMiddleware = require('./middleware/auth');


//const dbUrl = process.env.ATLASDB_URL ;
const dbUrl = 'mongodb://127.0.0.1:27017/one2one'

// Setup view engine

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));





// Middleware
//app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//app.use(methodOverride('_method'));
app.use(session({
  secret: 'secretkey',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

app.use(flash()); // Flash messages setup
//app.use(authMiddleware.SFM);
app.use((req, res, next) => {
  res.locals.successMsg = req.flash('successMsg');
  res.locals.errorMsg = req.flash('errorMsg');
  res.locals.currentUser = req.user;
  next();
});
// MongoDB connection

console.log('Database URL:', dbUrl);

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

/*app.get('/', (req, res) => {
  res.redirect('/home');
}); */

app.get('/home', (req, res) => {
    res.render('home', { title: 'Welcome to the Homepage' });
  });

  app.use('/mentors', mentorRoutes);
//app.use('/', require('./routes/student'));




const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
}); 

