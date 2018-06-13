const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const OAuth2Strategy = require('passport-oauth').OAuth2Strategy;
const config = require('../config/oauth');

module.exports = (passport) => {
    passport.serializeUser((user, done) => {
        done(null, user);
    });

    passport.deserializeUser((user, done) => {
        done(null, user);
    });

    passport.use('etuUTT', new OAuth2Strategy({
        authorizationURL: 'https://etu.utt.fr/api/oauth/authorize',
        tokenURL: 'https://etu.utt.fr/api/oauth/token',
        clientID: process.env.ETUUTT_OAUTH_CLIENTID,
        clientSecret: process.env.ETUUTT_OAUTH_CLIENTSECRET,
        callbackURL: config.etuUTT.callbackURL
    }, (accessToken, refreshToken, profile, done) => {
        return done(null, {
            profile: profile,
            token: accessToken
        });
    }));

    passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_OAUTH_CLIENTID,
        clientSecret: process.env.GOOGLE_OAUTH_CLIENTSECRET,
        callbackURL: config.google.callbackURL
    }, (accessToken, refreshToken, profile, done) => {
        return done(null, {
            profile: profile,
            token: accessToken
        });
    }));
};
