const express = require('express');

const router = new express.Router();

router.get('/', (req, res) => res.status(200).json({}).end() );

router
    .use('/', require('./teams'))
    .use('/', require('./matches'))
    .use('/', require('./groups'))
    .use('/', require('./sales'))
    .use('/', require('./tournaments'))
    .use('/', require('./players'))
    .use('/',require('./discord'));

module.exports = router;
