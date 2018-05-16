// TODO : BDD
/*
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const matchSchema = new Schema({
  id: Schema.Types.ObjectId,
  discipline: { type: Schema.Types.ObjectId, ref: 'Spotlight' },
  participants: [{ type: Schema.Types.ObjectId, ref: 'Team' }],
  score: String,
  result: String,
  status: {
    type: String,
    enum: ['todo','doing','done']
  }
})

var Match = mongoose.model('Match', matchSchema);
*/


const matches = [
    { id: 0, toornament: 0, participants: ['SuperEquipe', 'mumuxeTeam'], score: '16-2', result: 'mumuxeTeam', status: 'done' },
    { id: 1, toornament: 1, participants: ['mumuxeTeam', 'mangeCaca'], score: '', result: '', status: 'todo' },
    { id: 2, toornament: 2, participants: ['JeanBétonnière', 'mangeCaca'], score: '', result: '', status: 'doing' }
]

module.exports = matches;
