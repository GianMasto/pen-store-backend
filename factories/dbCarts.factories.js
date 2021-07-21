const { dbToUse } = require('../DAO/config')
const MysqlCarts = require('../DAO/carts/Mysql')
const MongoCarts = require('../DAO/carts/Mongo') 


let DAO

switch (dbToUse) {
  case 'mysql':
    DAO = MysqlCarts
    break;
  
  case 'mongo':
  case 'mongoAtlas':
    DAO = MongoCarts
    break;

  default:
    throw new Error('Selected DB does not exists. /DAO/config.js line 1')
}

module.exports = new DAO()