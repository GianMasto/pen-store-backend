const express = require('express')

const productsControllers = require('../controllers/products.controllers')
const checkAdminMiddlware = require('../middleware/checkAdmin.middleware')

const router = express.Router()

router.get('/listar', productsControllers.getProducts)
router.get('/listar/:id', productsControllers.getProduct)
router.post('/agregar', checkAdminMiddlware, productsControllers.addProduct)
router.put('/actualizar/:id', checkAdminMiddlware, productsControllers.updateProduct)
router.delete('/borrar/:id', checkAdminMiddlware, productsControllers.deleteProduct)

module.exports = router