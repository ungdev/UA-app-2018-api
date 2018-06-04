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
  const id = req.params.id;
  models.player.where({_id: id}).findOne((err,player) => {
    if (player) {
      res
        .status(200)
        .json(player)
        .end()
    } else {
      res
        .status(204)
        .end()
    }
  });
});

module.exports = router;
