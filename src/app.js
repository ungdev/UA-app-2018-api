const express = require('express');
const app     = express();
const fetch   = require('node-fetch');
const hsdata = require('./data.json');
const deck = require('deckstrings');
const players = require('./users.ua.json');

const setting = {'method' : 'GET', 'headers': {'Authorization': 'Bot NDMzNjQ4NzU5OTA2NTAwNjE5.Da_fvA.WatrhCS9beI5vDazmC-YSFUSRto'}};

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const parseDiscord = async (tag) => {
  let resp = await fetch('https://discordapp.com/api/channels/438370581650341889/messages',setting);
  let msgs = await resp.json();
  if (tag) {
    msgs = msgs.filter(msg => ((typeof msg.reactions !== 'undefined') && (msg.reactions[0].emoji.name === tag)));
  }
  return msgs.map(msg => {
    return {txt: msg.content,auteur:msg.author.username,date:msg.timestamp,tag};
  })
}

app.get(`/discord`,(req,res) => {
  parseDiscord()
  .then(resp => res.send(resp));
});

app.get(`/discord/:tag`,(req,res) => {
  parseDiscord(req.params.tag)
  .then(resp => res.send(resp));
});

app.get(`/hs`, (req,res) => {
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

app.get('/players', (req,res) => {
  players.sort((a,b) => {
    return a.name.localeCompare(b.name)
  });
  res.send(players);
});

app.get('/players/:id', (req,res) => {
  let player = players.filter(p => p.barcode === req.params.id.toString());
  res.send(player[0]);
});

app.get('/teams',(req,res) => {
  let teams = {};
  players.forEach(p => {
    if (p.spotlight !== null){
      if (p.team in teams) {
        teams[p.team].team_members.push(p.barcode);
      } else {
        teams[p.team] = {
          id: p.teamId,
          name: p.team,
          spotlight: p.spotlight,
          team_members: [p.barcode],
          paid: p.paid
        }
      }
    }
  })
  teams = Object.values(teams);
  teams.sort((a,b) => {
    return a.name.localeCompare(b.name)
  });
  res.send(teams);
})

app.get('/teams/:id',(req,res) => {
  let teams = {};
  players.forEach(p => {
    if (p.spotlight !== null){
      if (p.teamId in teams) {
        teams[p.teamId].team_members.push(p.barcode);
      } else {
        teams[p.teamId] = {
          id: p.teamId,
          name: p.team,
          spotlight: p.spotlight,
          team_members: [p.barcode],
          paid: p.paid
        }
      }
    }
  })
  res.send(teams[req.params.id  ]);
})

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
});
