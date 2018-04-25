// TODO : BDD
// schema :
// {
//      id:int
//      shortName:str
//      longName:str
//      discipline:str
//      size:int
//      participantType:str (team|solo)
//      teamSize:int
//      contact:str
//      rules:str
//      prize:str
//      logo:str
//      description:str
//      status:[str]
// }

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

module.exports = tournaments;
