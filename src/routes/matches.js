const express = require('express');
const models  = require('../models');

const router = new express.Router();

router.get('/matches', (req, res, next) => {
    res
        .status(200)
        .json(models.match)
        .end();
});

router.get('/matches/:id', (req, res, next) => {
    const id = parseInt(req.params.id);

    const matches = models.match.filter(match => match.id === id);

    res
        .status(200)
        .json(matches)
        .end();
});

module.exports = router;
