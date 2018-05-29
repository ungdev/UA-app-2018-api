const express = require('express');
const models  = require('../models');
const mongoose = require('mongoose');

const router = new express.Router();

router.get('/players', (req, res, next) => {
  models.player.find((err,players) => res
    .status(200)
    .json(players)
    .end())
});

router.get('/players/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    const player = models.player.findOne({_id: id}).cast;
    if (player) {
      res
        .status(200)
        .json(player)
        .end()
    } else {
      res
        .status(204)
    }
});

module.exports = router;
