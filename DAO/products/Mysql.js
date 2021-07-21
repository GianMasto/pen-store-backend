const MysqlDAO = require('../MysqlDAO')
const { mysqlConfig } = require('../config')


const knex = require('knex')(mysqlConfig)

module.exports = class MysqlProducts extends MysqlDAO {
  
  constructor() {
    super('products', knex)
  }

  async init() {
    try {
      const tableExists = await knex.schema.hasTable('products')
      if(!tableExists) {
        return knex.schema.createTable('products', t => {
          t.increments('id').notNullable(),
          t.string('title').notNullable(),
          t.string('thumbnail').notNullable(),
          t.float('price').notNullable().unsigned(),
          t.integer('stock').notNullable().unsigned()
        })
      }
  
    } catch (error) {
      throw new Error(error)
    }
  }
}