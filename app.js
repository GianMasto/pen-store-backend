const express = require('express')

const productsRouter = require('./routes/products.routes')
const cartRouter = require('./routes/cart.routes')
const JSONfile = require('./classes/JSONfile')


const app = express()
const port = process.env.PORT || 8080

app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))

app.use('/productos', productsRouter)
app.use('/carrito', cartRouter)

const server = app.listen(port, () => {
  console.log(`Servidor corriendo en puerto:${port}`)
})

server.on('error', error =>  console.error(`Error en el server ${error}`))