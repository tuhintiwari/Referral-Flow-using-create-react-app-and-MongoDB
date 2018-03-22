const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {           //user model to id - user turned to cookie for future
  done(null, user.id);                            // mongodb autogenerates id
});

passport.deserializeUser((id, done) => {          // id to user model - cookie turned back to model when user comes back
  User.findById(id)                               //whenever we access mongo db no matter what it is async and has to be resolved with a promise
    .then(user => {
      done(null, user);
    });
});

passport.use(
  new GoogleStrategy({
    clientID : keys.googleClientID,     //make sure to use colon and not equal because it is an object
    clientSecret : keys.googleClientSecret,
    //express route handler to handle user coming back to application(after granting permission from Google)
    callbackURL : '/auth/google/callback',
    proxy: true
  }, async (accessToken, refreshToken, profile, done) => {
      // console.log('accessToken', accessToken);        // allows us to reach out to google that user allowed us to modify their information
      // console.log('refreshToken', refreshToken);      // accessToken expires after sometime. So refreshToken updates accessToken
      // console.log('profile:', profile);
      const existingUser = await User.findOne({googleId: profile.id});              // doesn't return user directly, instead returns a promise(used to handle async code)
          if(existingUser) {
            return done(null, existingUser);
          }
          const user = await new User({ googleId: profile.id }).save();                      // saving is an async operation
          done(null, user);
      }
  )
);
