const {Example} = require('../models/')
const config = require('../config/config')


module.exports = {
    show (req, res) {
        res.send({
            message: 'Example response'
        })
    },
    ret (req, res) {
    res.send({
        message1: `You send   ${req.body.text}`
    })
},
async insert (req, res) {
    try {
        const example = await Example.create(req.body)
        res.send(example.toJSON())
    } catch(err) {
        res.send(err)
    }
  },
  async reg (res,req) {
      try {
          const user = await User.create({
              email: 'email@email',
              password: '11'
          })
        } catch(err) {
            res.send(err)
        }
      }
  }