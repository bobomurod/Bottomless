const AuthenticationController = require('./controllers/AuthenticationController')

const AuthenticationControllerPolicy = require('./policies/AuthenticationcontrollerPolicy')


module.exports = (app) => {
  app.post('/register', 
  AuthenticationControllerPolicy.register,
  AuthenticationController.register)
  // (req, res) => {
  //   res.send({
  //     message1: `Hello ${req.body.email}! your user was registred`,
  //     message2: `And your password is ${req.body.password}, keep it in safe pleace.`
  //   })
  // })
}
