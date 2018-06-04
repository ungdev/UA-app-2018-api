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

const inscription = mongoose.model('Inscription', inscriptionSchema);

module.exports = inscription;
