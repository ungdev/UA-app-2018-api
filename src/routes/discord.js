const express  = require('express');
const fetch    = require('node-fetch');
const settings = require('../config/discord');

const router = new express.Router();

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

router.get(`/discord`,async (req,res) => {
  const resp = await parseDiscord();
  res.send(resp);
});

router.get(`/discord/:tag`,(req,res) => {
  parseDiscord(req.params.tag)
  .then(resp => res.send(resp));
});

module.exports = router;
