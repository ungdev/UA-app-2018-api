const express       = require('express');
const mongoose      = require('mongoose');
const passport      = require('passport');
const cookieParser  = require('cookie-parser');
const cookieSession = require('cookie-session');
const config        = require('../config/api');
const routes        = require('./routes');
const auth          = require('./auth');

mongoose.connect(config.uri);

const app     = express();

app.use(cookieSession({
    name: 'session',
    keys: ['jeanmichelMux1234']
}));
app.use(cookieParser());

auth(passport);

app.use(passport.initialize());
app.use('/', routes);

// TODO : merger ce qui est fait en dessous avec les routes dans /routes/player, /routes/teams etc
// TODO : middlewares d'authentification
// TODO : remplacer les mocks de données par des schémas (choisir sql / nosql), et les appels à la BDD correspondants

app.listen(config.port, config.host, () => {
    console.log(`Server is listening on ${config.host}:${config.port}`);
});
