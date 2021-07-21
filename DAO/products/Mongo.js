const mongoose = require('mongoose')

const MongoDAO = require('../MongoDAO')
const {mongoConfig} = require('../config')

mongoose.connect(mongoConfig, {useNewUrlParser: true, useUnifiedTopology: true})


const productsSchema = new mongoose.Schema({
  title: {type: String, require: true},
  thumbnail: {type: String, require: true},
  price: {type: Number, require: true},
  stock: {type: Number, require: true},
})


const Product = mongoose.model('products', productsSchema)

module.exports = class MongoProducts extends MongoDAO {
  
  constructor() {
    super(Product)
  }

  init(){return}
}