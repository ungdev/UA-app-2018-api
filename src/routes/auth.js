const express  = require('express');
const passport = require('passport');

const router = new express.Router();

router.get('/', (req, res) => {
    if (req.session.token) {
        res.cookie('token', req.session.token);
        res
            .status(200)
            .json({
                status: 'session cookie set'
            });
    } else {
        res.cookie('token', '')
        res
            .status(200)
            .json({
                status: 'session cookie not set'
            });
    }
});

router.get('/logout', (req, res) => {
    req.session = null;
    req.logout();
    res.redirect('/');
});

router.get('/etuUTT', passport.authenticate('etuUTT', {
    scope: ['public']
}));

router.get('/etuUTT/callback', passport.authenticate('etuUTT', { failureRedirect: '/auth' }), (req, res) => {
    req.session.token = req.user.token;
    res.redirect('/auth');
});


router.get('/google', passport.authenticate('google', {
    scope: ['https://www.googleapis.com/auth/userinfo.profile']
}));

router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/auth' }), (req, res) => {
    req.session.token = req.user.token;
    res.redirect('/auth');
});

module.exports = router;
