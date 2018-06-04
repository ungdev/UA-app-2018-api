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
  const id = req.params.id;
  models.team.findOne({_id: id})
    .populate('tournament')
    .populate('teamMembers')
    .exec((err,team) => {
      if (team) {
        res
          .status(200)
          .json(team)
          .end()
      } else {
        res
          .status(204)
          .end()
      }
    });
});

module.exports = router;
