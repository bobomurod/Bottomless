const {User} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')
const request = require('request')

// Pleace for jwtSignUser function 


module.exports = {

    async getBitcoinPrice (req, res) {
        try {
            const bitcoinPrice = await request('https://api.coinmarketcap.com/v2/ticker/1/'
                , function(error, response, body) {
                    if (!error && response.statusCode == 200) {
                        var jsonArr = JSON.parse(body);
                        var btcPrice = jsonArr.data.quotes.USD.price
                        console.log(btcPrice)
                        res.send("BTC-USD "+btcPrice)
                    }
                })
        } catch (err) {
            res.send(err)
        }

    },

    async getEthereumPrice (req, res) {
        try {
            const ethereumPrice = await request('https://api.coinmarketcap.com/v2/ticker/1027/'
                , function(error, response, body) {
                    if (!error && response.statusCode == 200) {
                        var jsonArr = JSON.parse(body);
                        var ethPrice = jsonArr.data.quotes.USD.price
                        console.log(ethPrice)
                        res.send("ETH-USD " + ethPrice)
                    }
                })
        } catch (err) {
            res.send(err)
        }
    }    


}