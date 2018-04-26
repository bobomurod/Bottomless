const AuthenticationController = require('./controllers/AuthenticationController')

module.exports = (app) => {
  app.post('/register', 
  AuthenticationController.register)
  // (req, res) => {
  //   res.send({
  //     message1: `Hello ${req.body.email}! your user was registred`,
  //     message2: `And your password is ${req.body.password}, keep it in safe pleace.`
  //   })
  // })
}
