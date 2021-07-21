const dbToUse = 'mysql' // mysql, mongo, mongoAtlas

const mysqlConfig = {
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'coderhouse_backend'
  }
}

const mongoConfig = 'mongo' ? 'mongodb://localhost:27017/coderhouse_backend' : 'mongodb+srv://gian:gian@cluster0.o9qpe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

module.exports = {
  dbToUse,
  mysqlConfig,
  mongoConfig
}