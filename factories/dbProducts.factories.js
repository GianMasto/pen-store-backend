const { dbToUse } = require('../DAO/config')
const MysqlProducts = require('../DAO/products/Mysql')
const MongoProducts = require('../DAO/products/Mongo') 


let DAO

switch (dbToUse) {
  case 'mysql':
    DAO = MysqlProducts
    break;
  
  case 'mongo':
  case 'mongoAtlas':
    DAO = MongoProducts
    break;

  default:
    throw new Error('Selected DB does not exists. /DAO/config.js line 1')
}

module.exports = new DAO()