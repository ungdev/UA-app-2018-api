const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const saleSchema = new Schema({
  name: String,
  price: Number
});

const sale = mongoose.model('sale', saleSchema);


const sales = [
]

module.exports = sale;
