// TODO : BDD
/*
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teamSchema = new Schema({
  id: Schema.Types.ObjectId,
  name: String,
  spotlight: { type: Schema.Types.ObjectId, ref: 'Spotlight' },
  teamMembers: [{ type: Schema.Types.ObjectId, ref: 'Player' }],
  paid: Boolean,
  spotlightMatches: [Number]
})

var Team = mongoose.model('Team', teamSchema);
*/

const teams = [
    { id: 0, name: 'SuperEquipe', spotlight: 'LoL Pro', teamMembers: [0, 1, 2, 3, 4], paid: false, spotlightMatches: [0, 1, 2, 3, 4] },
    { id: 1, name: 'mumuxeTeam', spotlight: 'CS:GO', teamMembers: [5, 6, 7, 8, 9], paid: true, spotlightMatches: [5, 6, 7, 8, 9] },
    { id: 2, name: 'mangeCaca', spotlight: 'LoL Amateur', teamMembers: [10, 11, 12, 13, 14], paid: true, spotlightMatches: [10, 11, 12] },
    { id: 3, name: 'JeanBétonnière', spotlight: 'Hearthstone', teamMembers: [15, 16, 17, 18, 19], paid: true, spotlightMatches: [] }
];

module.exports = teams;
