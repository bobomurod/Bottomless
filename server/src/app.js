console.log('working')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.post('/register', (req, res) => {
  res.send({
    message1: `Hello ${req.body.email}! your user was registred`,
    message2: `And your password is ${req.body.password}, keep it in safe pleace.`
  })
})

app.listen(process.env.PORT || 8081)
