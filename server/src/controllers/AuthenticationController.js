const {User} = require('../models')
module.exports = {
   async register (req, res) {
       try {
        const user = await User.create(req.body)
        res.send(user.toJSON())
       } catch(err) {
           res.status(400).send({
               error: 'This email account allready in use'
            })
       }
        // res.send({
        //     message: `Hello ${req.body.email}! Your user was dregistered!`
        // })
    },
    async login (req, res) {
        try {
            const {email, password} = req.body
            const user = await User.findOne({
                where: {
                    email: email
                }
            })
            if (!user) {
               return res.status(403).send({
                    error: 'The login info was incorrect'
                })
            }
        }
    }
}