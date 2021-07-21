const dbCarts = require('../factories/dbCarts.factories')

const getCartProduct = async (req, res) => {
  try {
    const cartProductId = req.params.id
    const response = await dbCarts.findByValue(cartProductId)
    res.json(response)
  } catch({message}) {
    res.status(400).json({error: message})
  }
}

const getCartProducts = async (req, res) => {
  try {
    const response = await dbCarts.findAll()
    res.json(response)
  } catch({message}) {
    res.status(400).json({error: message})
  }
}

const addCartProduct = async (req, res) => {
  try {
    const productId = req.params.product_id

    const response = await dbCarts.add(productId)

    res.json(response)
  } catch ({message}) {
    res.status(400).json({error: message})
  }
}

const deleteCartProduct = async (req, res) => {
  try {
    const cartId = req.params.id

    const response = await dbCarts.deleteById(cartId)
    res.json(response)
  } catch ({message}) {
    res.status(400).json({error: message})
  }
}

module.exports = {
  getCartProduct,
  getCartProducts,
  addCartProduct,
  deleteCartProduct
}