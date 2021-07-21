module.exports = class MysqlDAO {

  constructor(tableName, knex) {
    this.tableName = tableName
    this.knex = knex
  }

  async add(object) {
    try {
      return await this.knex
                    .insert(object)
                    .into(this.tableName)
    } catch(error) {
      throw new Error(error)
    }
  }

  async findAll() {
    try {
      return await this.knex
                    .select()
                    .from(this.tableName)
    } catch(error) {
      throw new Error(error)
    }
  }

  async findByValue(field, value) {
    try {
      return await this.knex
                    .select()
                    .where(field, value)
                    .from(this.tableName)
    } catch(error) {
      throw new Error(error)
    }
  }

  async findByRange(field, minValue, maxValue) {
    try {
      return await this.knex
                    .select()
                    .where(field, '>', minValue)
                    .andWhere(field, '<', maxValue)
                    .from(this.tableName)
    } catch(error) {
      throw new Error(error)
    }
  }

  async updateById(id, object) {
    try {
      return await this.knex
                    .where('id', id)
                    .update(object)
                    .from(this.tableName)
    } catch(error) {
      throw new Error(error)
    }
  }
  async deleteById(id) {
    try {
      return await this.knex
                    .where('id', id)
                    .del()
                    .from(this.tableName)
    } catch(error) {
      throw new Error(error)
    }
  }

  async deleteAll() {
    try {
      return await this.knex
                        .del()
                        .from(this.tableName)
    } catch(error) {
      throw new Error(error)
    }
  }
}