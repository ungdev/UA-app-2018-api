const express = require('express');
const deck    = require('deckstrings');
const hscards  = require('../models/hscards');
const fs = require('fs');
const path = require('path');
const request = require('request');

const router = new express.Router();

// router.get(`/hs`, (req,res) => {
//   let decode = deck.decode(req.query.deckString);
//   let result = {
//     hero: hscards[decode.heroes[0]]
//   }
//   let cards = decode.cards.map(card => {
//     let c = {info: hscards[card[0]], quantity: card[1]};
//     return c
//   });
//   cards.sort((a,b) => {
//     return a.info.cost - b.info.cost
//   })
//   result.deck = cards;
//   res
//     .status(200)
//     .json(result)
//     .end();
// });

router.get('/hsdata', async (req, res) => {
  let dataPath = path.join(__dirname, '..', '..', 'data', 'hsdata.json')

  if (!fs.existsSync(dataPath)) {
    await new Promise((resolve, reject) => {
      let stream = request.get(`https://api.hearthstonejson.com/v1/latest/frFR/cards.json`)
        .pipe(fs.createWriteStream(dataPath))
        .on('error', err => console.error(err))
        .on('finish', () => resolve());
    })
  }

  res.json(require(dataPath));
})

router.get('/cardImage/:cardId.png', async (req, res) => {
  const cardImagePath = path.join(__dirname, '..', '..', 'data', 'imgs', `${req.params.cardId}.png`)
  console.log(cardImagePath)

  if (!fs.existsSync(cardImagePath)) {
    await new Promise((resolve, reject) => {
      request
        .get(`http://media.services.zam.com/v1/media/byName/hs/cards/enus/${req.params.cardId}.png`)
        .pipe(fs.createWriteStream(cardImagePath))
        .on('error', err => console.error(err))
        .on('finish', () => resolve());
    });
  }

  res.sendFile(cardImagePath);
})

module.exports = router;
