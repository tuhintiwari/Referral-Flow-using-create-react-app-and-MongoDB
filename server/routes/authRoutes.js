const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

module.exports = (app) => {
  //express route handler for /auth/google pushed to oauth flow - entirely handled by passport
  app.get('/auth/google',
    passport.authenticate('google', {   //GoogleStrategy() has an internal identifier of the string 'google'
      scope: ['profile', 'email']       //scope defines data fields like user's contacts, images, etc
    })
  );

  // to avoid error : redirect_uri_mismatch from google, copy the link console.developer.google given below
  //the error. Change the authorized redirect uri to localhost:PORT/auth/auth/google/callback

  //route handler for callback, after authentication
  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/surveys');
    }
  );

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.send(req.user);                               // send acknowledgement to the user that he is logged out
  })

  app.get('/api/current_user', (req, res) => {       //to test cookie authentication
    //res.send(req.session);                           // req.session is the data that passport is attempting to store in cookie(cookie is the session)
    res.send(req.user);
  });

  // express-session refers to session (it will store an id to the session. Can store as much data as we want to)
}
