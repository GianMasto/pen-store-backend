const dbProducts = require('../factories/dbProducts.factories')


const getProduct = async (req, res) => {
  try {
    const productId = req.params.id
    const response = await dbProducts.findByValue('id', productId)
    res.json(response)
  } catch({message}) {
    res.status(400).json({error: message})
  }
}

const getProducts = async (req, res) => {
  try {
    const response = await dbProducts.findAll()
    res.json(response)
  } catch({message}) {
    res.status(400).json({error: message})
  }
}

const addProduct = async (req, res) => {
  try {
    const product = req.body
    const response = await dbProducts.add(product)

    res.json(response)
  } catch ({message}) {
    res.status(400).json({error: message})
  }
}

const updateProduct = async (req, res) => {
  try {
    const productId = req.params.id
    const updatedProduct = req.body

    const response = await dbProducts.updateById(productId, updatedProduct)
    res.json(response)
  } catch ({message}) {
    res.status(400).json({error: message})
  }
}

const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id

    const response = await dbProducts.deleteById(productId)
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