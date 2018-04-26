const Joi = require('joi')

module.exports = {
    register (req, res, next) {
        const schema = {
            email: Joi.string().email(),
            password: Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{2-8}$')
            )
        }

        const {error, value} = Joi.validate(req.body, schema)
        if (error){
            switch (error.details[0].context.key) {
                case 'email':
                    res.status(400).send({
                        error: 'You must provide valid email'
                    })
                    break
                case 'password':
                    res.status(400).send({
                        error: 'Password must be difficult'
                    })
                    break
                default:
                    res.status(400).send({
                        error: 'Invalid registration information'
                    })
            }
        } else {
            next()
        }
    }
}