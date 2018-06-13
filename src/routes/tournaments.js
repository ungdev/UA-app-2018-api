const express = require('express');
const models  = require('../models');
const mongoose = require('mongoose');
const fetch    = require('node-fetch');
const settings = require('../../config/toornament.json');

const router = new express.Router();

const disciplineToornament = async(id) => {
  const resp = await fetch(`https://api.toornament.com/viewer/v2/disciplines/${id}`,settings.discipline);
  const discipline = await resp.json();
  return discipline;
}

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

router.get('/tournaments/:id/discipline', async (req, res, next) => {
  const id = req.params.id;
  models.tournament.findOne({_id: id})
    .exec(async (err,tournament) => {
      const discipline = await disciplineToornament(tournament.disciplineId);
      if (discipline) {
        res
          .status(200)
          .json(discipline)
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
