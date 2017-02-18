var express = require('express')
var app = express()
// var bank = require('./routes/bluebank.js')
var googleplaces = require('./routes/googleplaces.js')

app.get('/', function (req, res) {
  googleplaces.getNearMe;
//   res.send(200)
//   res.json('Hello World')
})

app.listen(80, function () {
  console.log('Server listening on port 80')
})