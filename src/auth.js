const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const OAuth2Strategy = require('passport-oauth').OAuth2Strategy;
const request = require('request-promise-native');
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
    }, async (accessToken, refreshToken, profile_, done) => {
        const profile = await request.get(`https://etu.utt.fr/api/public/user/account?access_token=${accessToken}`);
        const displayName = JSON.parse(profile).data.fullName;

        return done(null, {
            profile: {
                displayName
            },
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
