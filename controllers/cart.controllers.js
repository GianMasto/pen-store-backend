const JSONfile = require('../classes/JSONfile')

const productsJSON = new JSONfile('products.json')
const cartJSON = new JSONfile('cart.json')


const getCartProduct = async (req, res) => {
  try {
    const cartProductId = req.params.id
    const response = await cartJSON.getObject(cartProductId)
    res.json(response)
  } catch({message}) {
    res.status(400).json({error: message})
  }
}

const getCartProducts = async (req, res) => {
  try {
    const response = await cartJSON.getObjects()
    res.json(response)
  } catch({message}) {
    res.status(400).json({error: message})
  }
}

const addCartProduct = async (req, res) => {
  try {
    const productId = req.params.product_id

    const product = await productsJSON.getObject(productId)
    const response = await cartJSON.addObject({
      producto: product
    })

    res.json(response)
  } catch ({message}) {
    res.status(400).json({error: message})
  }
}

const deleteCartProduct = async (req, res) => {
  try {
    const cartId = req.params.id

    const response = await cartJSON.deleteObject(cartId)
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