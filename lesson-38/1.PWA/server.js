const https = require('https')
const http = require('http')
const fs = require('fs')
const express = require('express')

const app = express()
app.use('/', express.static(`${__dirname}/static`))

https.createServer({
  key: fs.readFileSync('./key.pem'),
  cert: fs.readFileSync('./cert.pem'),
  passphrase: 'Wolf'
}, app).listen(5000)
http.createServer(app).listen(8888)
