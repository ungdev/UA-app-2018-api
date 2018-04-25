const express = require('express');
const deck    = require('deckstrings');
const hsdata  = require('../models/hsdata');

const router = new express.Router();

router.get(`/hs`, (req,res) => {
  let decode = deck.decode(req.query.deckString);
  let result = {
    hero: hsdata[decode.heroes[0]]
  }
  let cards = decode.cards.map(card => {
    let c = {info: hsdata[card[0]], quantity: card[1]};
    return c
  });
  cards.sort((a,b) => {
    return a.info.cost - b.info.cost
  })
  result.deck = cards;
  res.send(result);
});

module.exports = router;
