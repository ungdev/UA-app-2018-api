const express = require('express');
const models  = require('../models');
const mongoose = require('mongoose');

const router = new express.Router();

router.get('/tournaments', (req, res, next) => {
  models.tournament.find((err,tournaments) => res
    .status(200)
    .json(tournaments)
    .end())
});

router.get('/tournaments/:id', (req, res, next) => {
  const id = req.params.id;
  models.tournament.where({_id: id}).findOne((err,tournament) => {
    if (tournament) {
      res
        .status(200)
        .json(tournament)
        .end()
    } else {
      res
        .status(204)
        .end()
    }
  });
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
