const express = require('express');
const models  = require('../models');

const router = new express.Router();

router.get('/teams', (req, res, next) => {
    res
        .status(200)
        .json(models.team)
        .end();
});

router.get('/teams/:id', (req, res, next) => {
    const id = parseInt(req.params.id);

    const teams = models.team.filter(team => team.id === id);

    res
        .status(200)
        .json(teams)
        .end();
});

module.exports = router;
