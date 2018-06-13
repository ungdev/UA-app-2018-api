const express  = require('express');
const passport = require('passport');

const router = new express.Router();

router.get('/', (req, res) => {
    if (req.session.googleToken) {
        res.cookie('token', req.session.googleToken);
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

router.get('/google', passport.authenticate('google', {
    scope: ['https://www.googleapis.com/auth/userinfo.profile']
}));

router.get('/logout', (req, res) => {
    req.logout();
    req.session = null;
    res.redirect('/');
});

router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/auth' }), (req, res) => {
    req.session.googleToken = req.user.token;
    res.redirect('/auth');
});


module.exports = router;
