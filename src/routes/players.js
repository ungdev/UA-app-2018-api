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

router.get('/players', (req, res, next) => {
  models.player.find((err,players) => res
    .status(200)
    .json(players)
    .end())
});

router.get('/players/:id', (req, res, next) => {
  const id = req.params.id;
  models.player.findOne({_id: id})
    .populate('team')
    .exec((err,player) => {
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

router.get('/players/:id/matches', async (req, res, next) => {
  const id = req.params.id;
  models.player.findOne({_id: id})
    .populate({
        path: 'team',
        populate: { path: 'tournament' }
      })
    .exec(async (err,player) => {
      const matches = await matchesToornament(player.team.tournament.idTournamentToor,player.team.idParticipantToor);
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
