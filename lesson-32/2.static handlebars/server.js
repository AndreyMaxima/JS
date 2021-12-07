const express = require('express');
const app = express();
const {create} = require('express-handlebars')

const host = '127.0.0.1'
const port = 3000

const hbs = create({
  helpers: {
    getText: () => 'main text'
  },
  defaultLayout: 'main'
})

console.log(__dirname)
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')
app.set('views', './views')

app.get('/', (req, res) => {
  res.render('home', {title: 'главная'})
})
app.get('/about', (req, res) => {
  res.render('about', {
    title: 'о нас',
    ip: req.ip
  })
})
app.get('/if', (req, res) => {
  res.render('ifview', {flag: req.query.flag})
})
app.get('/map', (req, res) => {
  res.render('map', {
    arr: [{
      name: "Andreas",
      lastName: "Valent"
    }, {
      name: "Tanya",
      lastName: "AnyLastName"
    }]
  })
})

app.get('/helpers', (req, res) => {
  res.render('helpers', {
    firstParam: 22,
    secondParam: 33,
    helpers: {
      getText: () => 'helper text',
      getSum: (a, b) => a + b
    }
  })
})

app.use('/imgs', express.static(`${__dirname}/static`))
app.listen(port, host, () => console.log(`Server started at http://${host}:${port}`))
