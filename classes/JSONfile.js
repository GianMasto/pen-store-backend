const fs = require('fs').promises
const fsCallback = require('fs')
const path = require('path');

module.exports = class JSONfile{
  
  constructor(filename) {
    this.JSONobjectsArray = []
    this.filedir = path.join(__dirname, "/../", filename)

  }

  async init() {
    try {
      const fileExists = fsCallback.existsSync(this.filedir)

      if(fileExists){
        this.JSONobjectsArray = await this.read()
        return
      }

      return await this.save()
    } catch({message}) {
      throw new Error(message)
    }
  }

  
  async read() {
    try {
      return JSON.parse(await fs.readFile(this.filedir, 'utf-8'))
    } catch({message}) {
      throw new Error(message)
    }
  }

  async save() { 
    try {
      return await fs.writeFile(this.filedir, JSON.stringify(this.JSONobjectsArray), 'utf-8')
    } catch({message}) {
      throw new Error(message)
    }
  }

  async addObject(object) {
    try {
      await this.init()
      const objectId = Date.now()
      const objectTimestamp = Date.now()
      const createdObject = {
        id: objectId,
        timestamp: objectTimestamp,
        ...object
      }
      this.JSONobjectsArray.push(createdObject)
  
      await this.save()
  
      return createdObject
    } catch({message}) {
      throw new Error(message)
    }
  }

  async getObjects() {
    try {
      await this.init()
      if(this.JSONobjectsArray.length === 0) {
        throw new Error('no hay productos cargados')
      }
  
      return this.JSONobjectsArray
    } catch({message}) {
      throw new Error(message)
    }
  }

  async getObject(id) {
    try {
      await this.init()
  
      if(this.JSONobjectsArray.length === 0) {
        throw new Error('no hay productos cargados')
      }
  
      const object = this.JSONobjectsArray.find(obj => obj.id == id)
  
      if(!object) {
        throw new Error('producto no encontrado')
      }
      return object;
    } catch ({message}) {
      throw new Error(message)
    }
  }

  async updateObject(id, object) {
    try {
      await this.init()

      const objectIndex = this.JSONobjectsArray.findIndex(obj => obj.id == id)

      if(objectIndex === -1) {
        throw new Error('producto no encontrado')
      }

      const objectTimestamp = Date.now()
      const objectId = this.JSONobjectsArray[objectIndex].id

      this.JSONobjectsArray[objectIndex] = {
        ...this.JSONobjectsArray[objectIndex],
        ...object,
        timestamp: objectTimestamp,
        id: objectId
      }

      await this.save()

      return this.JSONobjectsArray[objectIndex]
    } catch ({message}) {
      throw new Error(message)
    }
  }

  async deleteObject(id) {
    try {
      await this.init()

      const objectIndex = this.JSONobjectsArray.findIndex(obj => obj.id == id)

      if(objectIndex === -1) {
        throw new Error('producto no encontrado')
      }

      const deletedObject = this.JSONobjectsArray.splice(objectIndex, 1)[0]

      await this.save()

      return deletedObject
    } catch ({message}) {
      throw new Error(message)
    }
  }



}