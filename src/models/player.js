const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const incriptionSchema = new Schema({
  barcode: Number,
  paid: Boolean,
  plusOne: {
    firstName: String,
    lastName: String,
  },
  preSale:[{ type: Schema.Types.ObjectId, ref: 'Sale' }]
});

const playerSchema = new Schema({
    id: Schema.Types.ObjectId,
    pseudo: String,
    lastName: String,
    firstName: String,
    email: String,
    team: { type: Schema.Types.ObjectId, ref: 'Team' },
    spotlight: { type: Schema.Types.ObjectId, ref: 'Spotlight' },
    spotlightMatches: [{ type: Schema.Types.ObjectId, ref: 'Match' }],
    inscription: { type: Schema.Types.ObjectId, ref: 'Inscription' },
    customs: {
        steam: {
            pseudo: String,
            games:[String]
        },
        hearthstone: {
            pseudo: String,
            deckStrings:[String]
        },
        lolPro: {
             pseudo: String,
             level: Number
        },
        lolAmateur: {
            pseudo: String,
            level: Number
        },
        csgo: {
            pseudo: String,
        },
        pubg: {
            pseudo: String,
            stats: Schema.Types.Mixed
        }
    }
});

const player = mongoose.model('player', playerSchema);
const inscription = mongoose.model('inscription', playerSchema);

const players = [
{
    id: 0,
    pseudo: 'mumuxe',
    lastName: 'el',
    firstName: 'mumuxe',
    email: 'el.mumuxe@utt.fr',
    team: 'Les Muxettes',
    spotlight: 'LoL',
    spotlightMatches: [
    ],
    inscription: {
        barcode: '1337',
        paid: true,
        plusOne: {
            firstName: 'la',
            lastName: 'muxette'
        },
        preSale:[
            'el tshirt',
            'el swag'
        ]
    },
    customs: {
        steam: {
            pseudo: 'JeanMuxedu93',
            games:[
                'Ultimate Mexican Tacos 2',
                'Ultimate Mexican Tacos 3'
            ]
         },
        hearthstone: {
            pseudo: 'JeanMumuxeOriginal',
            deckStrings: [
                'AAEBAQcAAAQBAwIDAwMEAw=='
            ]
        },
        lolPro: {
            pseudo: 'MuxPro',
            level: 9000
        },
        lolAmateur: {
            pseudo: 'MuxSmurf',
            level: 333
        },
        csgo: {
            pseudo: 'ElFamosoMumuxe'
        },
        pubg: {
            pseudo: 'Moumouxe',
            stats: {
                a: 'b',
                c: 'd'
            }
        }
    }
}
];

module.exports = player;
module.exports = inscription;
