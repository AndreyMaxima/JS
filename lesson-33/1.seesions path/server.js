const express = require('express')
const app = express();
const session = require('express-session')

app.use(session({
  secret: '1234fkadsfopawerewitoe4fds',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 3600 * 24
  },
  name: 'session-id',
}))

app.get('/', (req, res) => {
  console.log(`session name: ${req.session.name}`)
  res.status(200).send(req.session.name)
})

app.get('/home', (req, res) => {
  console.log(`session name: ${req.session.name}`)
  res.status(200).send(req.session.name)
})

app.get('/about', (req, res) => {
  console.log(`session name: ${req.session.name}`)
  res.status(200).send(req.session.name)
})

app.get('/setName', (req, res) => {
  console.log(`query name: ${req.query.name}`)
  req.session.name = req.query.name
  res.status(200).send(req.session.name)
})

const host = '127.0.0.1'
const port = 3000

app.listen(port, host, () => console.log(`app started at http://${host}:${port}`))
