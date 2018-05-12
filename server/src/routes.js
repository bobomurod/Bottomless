const AuthenticationController = require('./controllers/AuthenticationController')

const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

const TestController = require('./controllers/TestController')

const InvestingController = require('./controllers/InvestingController')


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

  app.post('/login',
  AuthenticationController.login)

  app.post('/dashboard',
  InvestingController.getCryptoPrice)

  app.post('/getbalance',
  InvestingController.getBtcAddressBalance)

  // app.post('/profile',
  // AuthenticationController.profileEdit)
  
  // Next is The Example page created for show purpose only

  app.get('/shows',
  TestController.show)

  // Next is for show request as json before send to db
  // This will return request as json in response

  app.post('/return',
  TestController.ret)

  // Next route for inserting data to DB

  app.post('/insert',
  TestController.insert)

  app.post('/reg',
  TestController.reg)

  // Next route for show selected data from db

  app.post('/select',
  TestController.select)

}
