const express = require('express');
const models  = require('../models');

const router = new express.Router();

router.get('/tournaments', (req, res, next) => {
    res
        .status(200)
        .json(models.tournament)
        .end();
});

router.get('/tournaments/:id', (req, res, next) => {
    const id = parseInt(req.params.id);

    const tournaments = models.tournament.filter(tournament => tournament.id === id);

    res
        .status(200)
        .json(tournaments)
        .end();
});

router.get('/tournaments/:id/players', (req, res, next) => {
    const id = parseInt(req.params.id);
    // TODO
    res
        .status(200)
        .end();
});

router.get('/tournaments/:id/teams', (req, res, next) => {
    const id = parseInt(req.params.id);
    // TODO
    res
        .status(200)
        .end();
});

module.exports = router;
