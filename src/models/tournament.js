const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const tournamentSchema = new Schema({
      shortName: String,
      longName: String,
      discipline: { type: String, enum:['LoL','CS:GO','HS'] },
      size: Number,
      participantType: {
        type: String,
        enum: ['solo','team']
      },
      teamSize: Number,
      contact: { type: String, default: 'https://discordapp.com/oauth2/authorize?client_id=433648759906500619&permissions=8&scope=bot' },
      rules: String,
      prize: String,
      logo: String,
      description: String,
      status: [Schema.Types.Mixed]
})

const tournament = mongoose.model('tournament', tournamentSchema);

const tournaments = [
    {
        id: 0,
        shortName: 'LoL (Pro)',
        longName: 'League Of Legends (Pro)',
        discipline: 'League Of Legends',
        size: 48,
        participantType: 'team',
        teamSize: 4,
        contact: 'https://discordapp.com/invite/Emyn2cJ',
        rules: 'Interdit de mettre des olives, c\'est une agression sexuelle.',
        prize: 2700,
        logo: 'https://www.google.fr/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
        description: 'Tournois pour les joueurs professionnels de League Of Legends',
        status: [
            {
                timestamp: "2018_04_10-18:36:05",
                status : "Le tounoi vient de démarrer !"
            },
            {
                timestamp: "2018_04_10-23:10:55",
                status : "Problème de réseau, réparation en cours"
            }
        ]
    },
    {
        id: 1,
        shortName: 'CS:GO',
        longName: 'Counter Strike : Global Offensive',
        discipline: 'Counter Strike',
        size: 48,
        participantType: 'team',
        teamSize: 4,
        contact: 'https://discordapp.com/invite/Emyn2cJ',
        rules: 'Interdit de prendre de la MDMA pour booster ses capacités.',
        prize: 333,
        logo: 'https://steamstore-a.akamaihd.net/public/shared/images/header/globalheader_logo.png?t=962016',
        description: 'Tournois pour les joueurs professionnels de League Of Legends',
        status: [
            {
                timestamp: "2018_04_10-18:36:05",
                status : "Le tounoi est annulé"
            }
        ]
    },
];

module.exports = tournament;
