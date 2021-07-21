module.exports = class MongoDAO {

  constructor(model) {
    this.model = model
  }

  async add(object) {
    try {
      return await this.model.create(object)
    } catch(error) {
      throw new Error(error)
    }
  }

  async findAll() {
    try {
      return await this.model.find({})
    } catch(error) {
      throw new Error(error)
    }
  }

  async findByValue(field, value) {
    try {
      return await this.model.find({
        [field]: value
      })
    } catch(error) {
      throw new Error(error)
    }
  }

  async findByRange(field, minValue, maxValue) {
    try {
      return await this.model.find({
        $and: [
          {[field]: {$gt: minValue}},
          {[field]: {$lt: maxValue}}
        ]
      })
    } catch(error) {
      throw new Error(error)
    }
  }

  async updateById(id, object) {
    try {
      return await this.model.findByIdAndUpdate(id, object);
    } catch(error) {
      throw new Error(error)
    }
  }
  async deleteById(id) {
    try {
      return await this.model.findByIdAndDelete(id);
    } catch(error) {
      throw new Error(error)
    }
  }

  async deleteAll() {
    try {
      return await this.model.remove({});
    } catch(error) {
      throw new Error(error)
    }
  }
}