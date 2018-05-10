const {User} = require('..models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')
const request = require('request')

// Pleace for jwtSignUser function 


module.exports = {

    async getBitcoinPrice (req, res) {
        try {
            const bitcoinPrice = await request('https://api.coinmarketcap.com/v2/ticker/1/'
                , function(error, response, body){
                    if (!error && response.statusCode == 200) {
                        var jsonArr = JSON.parse(body);
                        console.log(jsonArr.data.quotes.USD.price)
                    }
                })
        } catch (err) {
            res.send(err)
        }

    }







}