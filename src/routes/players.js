const express = require('express');
const models  = require('../models');

const router = new express.Router();

router.get('/players', (req, res, next) => {
    res
        .status(200)
        .json(models.player)
        .end();
});

router.get('/players/:id', (req, res, next) => {
    const id = parseInt(req.params.id);

    const players = models.player.filter(player => player.id === id);

    res
        .status(200)
        .json(players)
        .end();
});

module.exports = router;
