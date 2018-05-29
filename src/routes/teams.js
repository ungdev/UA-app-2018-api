const express = require('express');
const models  = require('../models');
const mongoose = require('mongoose');

const router = new express.Router();

router.get('/teams', (req, res, next) => {
  models.team.find((err,teams) => res
    .status(200)
    .json(teams)
    .end())
});

router.get('/teams/:id', (req, res, next) => {
  const id = parseInt(req.params.id);
  const team = models.team.findOne({_id: id}).cast;
  if (team) {
    res
      .status(200)
      .json(team)
      .end()
  } else {
    res
      .status(204)
  }
});

module.exports = router;
