
/*
 * Module dependencies
 */

var passport = require('passport')
  , TwitterStrategy = require('passport-twitter').Strategy
  , FacebookStrategy = require('passport-facebook').Strategy 
  , GoogleStrategy = require('passport-google-oauth').OAuth2Strategy
  , config = require('./config.json');

/*
 * Auth strategy
 */

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

if(config.auth.twitter.consumerkey.length) {
  passport.use(new TwitterStrategy({
      consumerKey: config.auth.twitter.consumerkey,
      consumerSecret: config.auth.twitter.consumersecret,
      callbackURL: config.auth.twitter.callback
    },
    function(token, tokenSecret, profile, done) {
      return done(null, profile);
    }
  ));
} 

if(config.auth.facebook.clientid.length) {
  passport.use(new FacebookStrategy({
      clientID: config.auth.facebook.clientid,
      clientSecret: config.auth.facebook.clientsecret,
      callbackURL: config.auth.facebook.callback
    },
    function(accessToken, refreshToken, profile, done) {
      return done(null, profile);
    }
  ));
}

if(config.auth.google.consumerkey.length) {
  passport.use(new GoogleStrategy({
      clientID: config.auth.google.consumerkey,
      clientSecret: config.auth.google.consumersecret,
      callbackURL: config.auth.google.callback
    },
    function(accessToken, refreshToken, profile, done) {
      return done(null, profile);
    }
  ));
}
