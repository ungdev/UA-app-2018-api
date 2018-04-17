const express = require('express');
const app     = express();
const fetch   = require('node-fetch');
const hsdata = require('./data.json');
const deck = require('deckstrings');

app.get('/', (req, res) => {
    res.send('Hello World!');
});

function parseDiscord(data,tag) {
  let mmsg = data;
  if (tag) {
    mmsg = mmsg.filter(msg => ((typeof msg.reactions !== 'undefined') && (msg.reactions[0].emoji.name === tag)));
  }
    return mmsg.map(msg => {
      return {txt: msg.content,auteur:msg.author.username,date:msg.timestamp,tag};
  })
}

app.get(`/discord`,(req,res) => {
  const setting = {'method' : 'GET', 'headers': {'Authorization': 'Bot NDMzNjQ4NzU5OTA2NTAwNjE5.Da_fvA.WatrhCS9beI5vDazmC-YSFUSRto'}};
  fetch('https://discordapp.com/api/channels/433711089461493760/messages',setting)
  .then(resp => resp.json())
  .then(resp => parseDiscord(resp))
  .then(resp => res.send(resp));
});

app.get(`/discord/:tag`,(req,res) => {
  const setting = {'method' : 'GET', 'headers': {'Authorization': 'Bot NDMzNjQ4NzU5OTA2NTAwNjE5.Da_fvA.WatrhCS9beI5vDazmC-YSFUSRto'}};
  fetch('https://discordapp.com/api/channels/433711089461493760/messages',setting)
  .then(resp => resp.json())
  .then(resp => parseDiscord(resp,req.params.tag))
  .then(resp => res.send(resp));
});

app.get(`/hs`, (req,res) => {
  let decode = deck.decode(req.get('deckString'));
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

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
});
