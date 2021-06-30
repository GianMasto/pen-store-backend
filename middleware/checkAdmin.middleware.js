const isAdmin = require('../config/isAdmin.config')

module.exports = (req, res, next) => {
  if(isAdmin){
    return next()
  }
  res.status(400).send({ 
    error: '-1',
    descripcion: `ruta '${req.path}' método '${req.method}' no autorizada`
 })
}