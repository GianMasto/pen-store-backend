const mongoose = require('mongoose')

const MongoDAO = require('../MongoDAO')

const cartsSchema = new mongoose.Schema({
  timestamp: {type: Date, default: Date.now},
  products: [{type: Number, require: true}]
})


const Cart = mongoose.model('carts', cartsSchema)

module.exports = class MongoCarts extends MongoDAO {
  
  constructor() {
    super(Cart)
  }

  init(){return}
}