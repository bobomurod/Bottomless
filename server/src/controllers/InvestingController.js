const {User} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')
const request = require('request')
const axios = require('axios')

// Pleace for jwtSignUser function 


var btcPrice = null
var ethPrice = null







module.exports = {


    getCryptoPrice (req, res) {
    axios.all([
        axios.get('https://api.coinmarketcap.com/v2/ticker/1/'),
        axios.get('https://api.coinmarketcap.com/v2/ticker/1027/')
    ]).then(axios.spread((response1, response2) => {
        
           console.log( response1.data.data.quotes.USD.price);
           res.send({
               BTC: response1.data.data.quotes.USD.price,
               ETH: response2.data.data.quotes.USD.price
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
// ]).then(axios.spread((response1, response2) => {
//   console.log(response1.data);
//   console.log(response2.data.url);
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
}
