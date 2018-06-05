const express = require('express');
const models  = require('../models');
const mongoose = require('mongoose');
const fetch    = require('node-fetch');
const settings = require('../../config/toornament.json');
const router = new express.Router();

const matchesToornament = async(idTournament,idParticipant) => {
  const resp = await fetch(`https://api.toornament.com/viewer/v2/tournaments/${idTournament}/matches?participant_ids=${idParticipant}`,settings);
  const matches = await resp.json();
  return matches;
}

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

router.get('/teams/:id/matches', async (req, res, next) => {
  const id = req.params.id;
  models.team.findOne({_id: id})
    .exec(async (err,team) => {
      const matches = await matchesToornament(team.idTournamentToor,team.idParticipantToor);
      if (matches) {
        res
          .status(200)
          .json(matches)
          .end()
      } else {
        res
          .status(204)
          .end()
      }
    });
});

module.exports = router;
