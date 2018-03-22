const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/Users');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(
    cookieSession({
      maxAge: 30 * 24 * 60 * 60 * 1000,     // 30 days until cookie expires
      keys: [keys.cookieKey]                // used to sign or encrypt cookies
    })
);

app.use(passport.initialize());             // to let passp ort know to keep track of cookies
app.use(passport.session());

require('./routes/authRoutes')(app);    // require statement returns a function and we immediately call the function with app object
app.listen(5000);
