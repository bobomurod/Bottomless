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
        if (req.body.text1 != null) {
        const example = await Example.create(req.body)
        console.log(req.body)
        res.send(example.toJSON())
        } else {
            res.send('we dont need to write null to db')
        }
    } catch(err) {
        res.send(err)
    }
  },
  async reg (req, res) {
    try {
        const user = await User.create({
            email: "hello2@hm",
            password: "11"
        })
        res.send(user.toJSON())
    } catch(err) {
        res.send(err)
        }
    },
  async select (req, res) {
      try {
          const example = await Example.findOne({
            //   attributes: ['text1'],
              where: {
                  id: 28
              }
          }) 
          // .then(function(result){console.log(result); return result})
             res.send(example.toJSON())
      } catch (err) {
          res.send(err)
      }
  }
}