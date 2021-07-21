const MysqlDAO = require('../MysqlDAO')
const { mysqlConfig } = require('../config')


const knex = require('knex')(mysqlConfig)

module.exports = class MysqlCarts extends MysqlDAO {
  
  constructor() {
    super('carts', knex)
  }

  async init() {
    try {
      const tableExists = await knex.schema.hasTable('carts')
      if(!tableExists) {
        return knex.schema.createTable('carts', t => {
          t.increments('id').notNullable(),
          t.integer('timestamp').notNullable().unsigned(),
          t.integer('product_id').notNullable().unsigned(),
          t.foreign('product_id').references('id').inTable('products')
        })

      }
  
  
    } catch (error) {
      throw new Error(error)
    }
  }
}