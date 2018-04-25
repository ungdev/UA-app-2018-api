const express = require('express');
const config  = require('../config/api');
const app     = express();
// const hsdata = require('./data.json');
// const players = require('./users.ua.json');
const routes  = require('./routes');

app.use('/', routes);

// TODO : merger ce qui est fait en dessous avec les routes dans /routes/player, /routes/teams etc
// TODO : middlewares d'authentification
// TODO : remplacer les mocks de données par des schémas (choisir sql / nosql), et les appels à la BDD correspondants

// app.get('/players', (req,res) => {
//   players.sort((a,b) => {
//     return a.name.localeCompare(b.name)
//   });
//   res.send(players);
// });

// app.get('/players/:id', (req,res) => {
//   let player = players.filter(p => p.barcode === req.params.id.toString());
//   res.send(player[0]);
// });

// app.get('/teams',(req,res) => {
//   let teams = {};
//   players.forEach(p => {
//     if (p.spotlight !== null){
//       if (p.team in teams) {
//         teams[p.team].team_members.push(p.barcode);
//       } else {
//         teams[p.team] = {
//           id: p.teamId,
//           name: p.team,
//           spotlight: p.spotlight,
//           team_members: [p.barcode],
//           paid: p.paid
//         }
//       }
//     }
//   })
//   teams = Object.values(teams);
//   teams.sort((a,b) => {
//     return a.name.localeCompare(b.name)
//   });
//   res.send(teams);
// })

// app.get('/teams/:id',(req,res) => {
//   let teams = {};
//   players.forEach(p => {
//     if (p.spotlight !== null){
//       if (p.teamId in teams) {
//         teams[p.teamId].team_members.push(p.barcode);
//       } else {
//         teams[p.teamId] = {
//           id: p.teamId,
//           name: p.team,
//           spotlight: p.spotlight,
//           team_members: [p.barcode],
//           paid: p.paid
//         }
//       }
//     }
//   })
//   res.send(teams[req.params.id  ]);
// })

app.listen(config.port, config.host, () => {
    console.log(`Server is listening on ${config.host}:${config.port}`);
});
