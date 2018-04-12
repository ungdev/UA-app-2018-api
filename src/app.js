const express = require('express');
const app     = express();
const fetch = require('node-fetch');
const hsdata = require('./hsdata.json');
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

app.get(`/hs`,(req,res) => {
  const decode = deck.decode('AAEBAR8GgAfFCKirAoW4AunSAobTAgyNAagCtQPJBJcI2wn+DPixAt3SAt/SAuPSAuHjAgA=');
  res.send(decode);
});

app.get(`/test`, (req, res) => {
  fetch('http://localhost:3000/')
  .then(resu => resu.text())
  .then(resu => res.send(resu));
})

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
});
