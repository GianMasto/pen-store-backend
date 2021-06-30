const JSONfile = require('../classes/JSONfile')

const productsJSON = new JSONfile('products.json')

const getProduct = async (req, res) => {
  try {
    const productId = req.params.id
    const response = await productsJSON.getObject(productId)
    res.json(response)
  } catch({message}) {
    res.status(400).json({error: message})
  }
}

const getProducts = async (req, res) => {
  try {
    const response = await productsJSON.getObjects()
    res.json(response)
  } catch({message}) {
    res.status(400).json({error: message})
  }
}

const addProduct = async (req, res) => {
  try {
    const product = req.body
    const response = await productsJSON.addObject(product)

    res.json(response)
  } catch ({message}) {
    res.status(400).json({error: message})
  }
}

const updateProduct = async (req, res) => {
  try {
    const productId = req.params.id
    const updatedProduct = req.body

    const response = await productsJSON.updateObject(productId, updatedProduct)
    res.json(response)
  } catch ({message}) {
    res.status(400).json({error: message})
  }
}

const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id

    const response = await productsJSON.deleteObject(productId)
    res.json(response)
  } catch ({message}) {
    res.status(400).json({error: message})
  }
}

module.exports = {
  getProduct,
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct
}