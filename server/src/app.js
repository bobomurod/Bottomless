console.log('working')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('./models')
const config = require('./config/config')
const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)

function setData (req, res) {
  Example.create({
    text1: 'hello'
  })
}

function reg (req, res) {
  User.create({
    email: 'email@email',
    password: '11'
  })
}

sequelize.sync()
  .then(() => {
    app.listen(config.port)
    console.log(`Server started on port ${config.port}`)
  })
