const {User} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')
const request = require('request')
const axios = require('axios')
const bitcore = require('bitcore-lib')
const EthereumBip44 = require('ethereum-bip44')
const bitcore_ltc = require('bitcore-litecoin')

// Pleace for jwtSignUser function 


module.exports = {

    getCryptoPrice (req, res) {
        axios.all([
            axios.get('https://api.coinmarketcap.com/v2/ticker/1/'),
            axios.get('https://api.coinmarketcap.com/v2/ticker/1027/'),
            axios.get('https://api.coinmarketcap.com/v2/ticker/2/'),
            axios.get('https://api.coinmarketcap.com/v2/ticker/1831/')
        ]).then(axios.spread((btc, eth, ltc, bch) => {
        
           console.log( btc.data.data.quotes.USD.price);
           res.send({
               BTC: btc.data.data.quotes.USD.price,
               ETH: eth.data.data.quotes.USD.price,
               LTC: ltc.data.data.quotes.USD.price,
               BCH: bch.data.data.quotes.USD.price
           })
        })).catch(error => {
            console.log(error);
        });
    },

    getBtcAddressBalance (req, res) {
        axios.get('https://blockchain.info/rawaddr/1Jk7pJqNVFpK1rCW2oKsnXsdLZaJgmYbWQ')
        .then(response => {
            console.log(response.data.final_balance)
        })
        .catch(error => {
            console.log(error)
        })
    },

    getNewBtcAddress (req, res) {
        var privateKey = new bitcore.PrivateKey()
        console.log(privateKey)
        var address = privateKey.toAddress()
        console.log(address)
        res.send(address)
    },

    getNewEthAddress (req, res) {
        var ethKey = bitcore.HDPrivateKey()
        console.log(ethKey)
        var address = new EthereumBip44(ethKey)
        console.log(address.getAddress(0))
        res.send(address.getAddress(0))
    },

    getNewLtcAddress (req, res) {
        var privateKey = new bitcore_ltc.PrivateKey()
        console.log(privateKey)
        var address = privateKey.toAddress()
        console.log(address)
        res.send(address)
    },

    
}

    // axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    // .then(response => {
    //   console.log(response.data.url);
    //   console.log(response.data.explanation);
    // })
    // .catch(error => {
    //   console.log(error);
    // });
    

    // var axios = require('axios');
 
// axios.all([
//   axios.get('https://api.coinmarketcap.com/v2/ticker/1/'),
//   axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2017-08-02')
// ]).then(axios.spread((btc, eth) => {
//   console.log(btc.data);
//   console.log(eth.data.url);
// })).catch(error => {
//   console.log(error);
// });
//     }

    // async getBitcoinPrice (req, res) {
    //     try {
    //         const bitcoinPrice = await request('https://api.coinmarketcap.com/v2/ticker/1/'
    //             , function(error, response, body) {
    //                 if (!error && response.statusCode == 200) {
    //                     var jsonArr = JSON.parse(body);
    //                     var btcPrice = jsonArr.data.quotes.USD.price
    //                     console.log(btcPrice)
    //                     res.send("BTC-USD "+btcPrice)
    //                 }
    //             })
    //     } catch (err) {
    //         res.send(err)
    //     }

    // },

    // async getEthereumPrice (req, res) {
    //     try {
    //         const ethereumPrice = await request('https://api.coinmarketcap.com/v2/ticker/1027/'
    //             , function(error, response, body) {
    //                 if (!error && response.statusCode == 200) {
    //                     var jsonArr = JSON.parse(body);
    //                     var ethPrice = jsonArr.data.quotes.USD.price
    //                     console.log(ethPrice)
    //                     res.send("ETH-USD " + ethPrice)
    //                 }
    //             })
    //     } catch (err) {
    //         res.send(err)
    //     }
    // },
    
    // async getCryptoPrice (req, res) {
    //     console.log('fuck')
       
    //     try {
    //         const bitcoinPrice = request('https://api.coinmarketcap.com/v2/ticker/1'
    //         , async function(error, response, body){
    //             console.log('fuck2')
    //            if (!error && response.statusCode == 200) 
    //            var jsonArr =  JSON.parse(body)
    //              btcPrice =  jsonArr.data.quotes.USD.price
    //         })
    //         const ethereumPrice = request('https://api.coinmarketcap.com/v2/ticker/1027'
    //         , function(error, response, body) {
    //             console.log('fuck3')
    //             if (!error && response.statusCode == 200) {
    //                 var jsonArr = JSON.parse(body)
    //                 ethPrice = jsonArr.data.quotes.USD.price
    //             } else {
    //                 console.log('else2')
    //                 ethPrice = error
    //             }
    //         })
            
    //         console.log(await btcPrice)
    //     } catch (err) {
    //         res.send(err)
    //     }

    //      res.send({
    //         BTC : btcPrice,
    //         ETH : ethPrice
    //     })
    //     console.log(ethPrice)
    // 