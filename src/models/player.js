// TODO : BDD
// schema :
// {
//      id:int
//      pseudo:str
//      lastName:str
//      firstName:str
//      email:str
//      team:str
//      spotlight:str
//      spotlightMatches:[match]
//      inscription: {
//          barcode:int,
//          paid:boolean,
//          plusOne: {
//             firstName:str,
//              lastName:str
//          }
//          preSale:[Object]
//      },
//      customs: {
//          steam: {
//              pseudo:str,
//              games:[str]
//          },
//          hearthstone: {
//              pseudo:str,
//              deckStrings:[str]
//          },
//          lolPro: {
//              pseudo:str,
//              level:int
//          },
//          lolAmateur: {
//              pseudo:str,
//              level:int
//          },
//          csgo: {
//              pseudo:str
//          },
//          pubg: {
//              pseudo:str,
//              stats:Object
//          }
//      }
// }

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

module.exports = players;
