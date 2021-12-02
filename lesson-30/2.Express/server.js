const express = require('express')
const app = express()
const fetch = require('node-fetch')

const host = '127.0.0.1'
const port = 3000

app.use(express.json()) // Необходимо для парсинга body в соответствуюзих запросах в формате JSON
app.use((req, res, next) => {
  res.type('text/plain') // Установка заголовка type
    .set( // Установка заголовка
      'Access-Control-Allow-Origin', // Заголовок
      '*' // Значение заголовка
    )
    .set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH')
    .set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next() // Если не вызвпать то запрос не пройдёт дальше
})

app.route('/')
  .get((req, res) => {
    res
      // .sendStatus(405) // Отправить пустой ответ с указанным статусом
      .status(200) // Установка статуса

      .cookie('cookieKey', 'cookieValue') // Установить Set-cookie заголовок
      // .end() // Отправить ответ с указанными ранее параметрами (параметры не принемаеи)
      .json('GET echo') // Отправить ответ с указанными параметрами.
    //.redirect('localhost:2000') // Перенаправить на url (отправить 302-й статус)
    //.json({ key: 'value'}) // Отправить объект (производится преобразование в JSON)
  })
  .post((req, res) => {
    res.status(200)
      .send('POST echo')
  })
  .put((req, res) => {
    res.status(200)
      .send('PUT echo')
  })
  .delete((req, res) => {
    res.status(200)
      .send('DELETE echo')
  })
  .options((req, res) => {
    res.status(200)
      .end()
  })

app.all('/allMethod', (req, res) => {
  res.status(200)
    .send('all method echo')
})

app.post('/post/:id/:limit/:name', (req, res) => {
  console.log(req.body)
  res.status(200).json({
    params: req.params,
    query: req.query,
    body: req.body,
    cookies: req.cookie,
    headers: req.headers,
    url: req.url,
    path: req.path,
    ip: req.ip,
    hostname: req.hostname,
    protocol: req.protocol,
    secure: req.secure,
    xhr: req.xhr
  })
})

app.get('/fetch', (req, res) => {
  fetch('https://google.com')
    .then(response => response.text())
    .then(apiResp => res.status(200).send(apiResp))
    .catch(error => res.status(500).send('third-party api error'))
})
app.listen(port, host, () => console.log(`Server started at http://${host}:${port}`))
