const express = require('express');
const config  = require('../config/api');
const app     = express();
const routes  = require('./routes');

app.use('/', routes);

// TODO : merger ce qui est fait en dessous avec les routes dans /routes/player, /routes/teams etc
// TODO : middlewares d'authentification
// TODO : remplacer les mocks de données par des schémas (choisir sql / nosql), et les appels à la BDD correspondants

app.listen(config.port, config.host, () => {
    console.log(`Server is listening on ${config.host}:${config.port}`);
});
