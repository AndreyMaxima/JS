const app = require('./app')
const https = require('https')
const http = require('http')
const fs = require('fs')


https.createServer({
  key: fs.readFileSync('./key.pem'),
  cert: fs.readFileSync('./cert.pem'),
  passphrase: 'wolf'
}, app).listen(5000)
http.createServer(app).listen(8888)
