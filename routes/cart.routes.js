const express = require('express')

const cartControllers = require('../controllers/cart.controllers')

const router = express.Router()

router.get('/listar', cartControllers.getCartProducts)
router.get('/listar/:id', cartControllers.getCartProduct)
router.post('/agregar/:product_id', cartControllers.addCartProduct)
router.delete('/borrar/:id', cartControllers.deleteCartProduct)

module.exports = router