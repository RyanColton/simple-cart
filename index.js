var express = require('express')
var session = require('express-session')
var bodyParser = require('body-parser')
var config = require('./config')
var cartCtrl = require('./cartCtrl')

var app = express()
app.use(express.static('public'))
app.use('/node_modules', express.static('node_modules'))
app.use(session({
  secret: config.secret,
  resave: true,
  saveUninitalized: true
}));
app.use(bodyParser.json())

app.post('/api/cart', cartCtrl.addProduct)

app.get('/api/cart', cartCtrl.get)

app.listen(1138, function(){
  console.log("Express is running on 1138")
})
