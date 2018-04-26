const Sequelize = require('sequelize')
const Op = Sequelize.Op
module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'dimadb',
    user: process.env.DB_USER || 'dimadb',
    password: process.env.DB_PASS || 'dimadb',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      operatorsAliases: Op,
      host: process.env.HOST || 'localhost',
      storage: './Bottomless.sqlite'
    }
  }
}
