const http = require('http')
const urlUtils = require('url')
const fetch = require('node-fetch')

const host = '127.0.0.1'
const port = 3000

const getBody = (req) => new Promise((resolve) => { // Получение тела запроса
  let body =''
  req.on('data', chunk => {
    body += chunk;
  })
  req.on('end', () => {
      const obj = JSON.parse(body)
      resolve(obj)
    }
  )
})

const endRequest = (res, statusCode, payload) => {
  res.statusCode = statusCode;
  res.setHeader('Content-Type', 'text/plain')
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH')
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.end(payload)
}

const server = http.createServer((req, res) => { // Создание сервера
  console.log(req.url) // url к которому было совершено образение
  const url = urlUtils.parse(req.url, true) // Парсинг url
  switch (url.pathname) {
    case '/users':
      switch (req.method) {
        case 'GET':
          endRequest(res, 200, 'GET users echo');
          break;
        case 'POST':
          endRequest(res, 200, 'POST users echo');
          break;
        case 'PUT':
          endRequest(res, 200, 'PUT users echo');
          break;
        case 'DELETE':
          endRequest(res, 200, 'DELETE users echo');
          break;
        case 'OPTIONS':
          endRequest(res, 200);
          break;
        default:
          endRequest(res, 404, 'NOT_FOUND')
      }
      break;
    case '/search': {
      if (req.method === 'GET') {
        url.query.test === 'true' // Обращение к параметру из url
        && console.log('param test is true')
        endRequest(res, 200, JSON.stringify(url.query));
      } else {
        endRequest(res, 404, 'NOT_FOUND')
      }
    }
      break;
    case '/postbody': {
      if(req.method === 'POST') {
        getBody(req)
          .then((body) => {
            endRequest(res, 200, JSON.stringify(body))
          })
      } else {
        endRequest(res, 404, 'NOT_FOUND')
      }
    } break;
    case '/headers': {
      if(req.method === 'GET') {
        endRequest(res, 200,
          JSON.stringify(
            req.headers // Заголовки запроса
          ))
      } else {
        endRequest(res, 404, 'NOT_FOUND')
      }
    } break;
    case '/error': {
      throw new Error('any error')
    }
    case '/fetchgoogle': {
      if(req.method === 'GET') {
        fetch('https://www.google.com')
          .then(apiRes => apiRes.text())
          .then(text => endRequest(res, 200, text))
      } else {
        endRequest(res, 404, 'NOT_FOUND')
      }
    } break;
    default:
      switch (req.method/*метод к которому было совершено образение*/) {
        case 'GET':
          endRequest(res, 200, 'GET echo');
          break;
        case 'POST':
          endRequest(res, 200, 'POST echo');
          break;
        case 'PUT':
          endRequest(res, 200, 'PUT echo');
          break;
        case 'DELETE':
          endRequest(res, 200, 'DELETE echo');
          break;
        case 'OPTIONS':
          endRequest(res, 200);
          break;
        default:
          endRequest(res, 404, 'NOT_FOUND')
      }
  }
})

server.listen( //Запуск сервера
  port, //Порт сервера
  host, //Хост сервера
  () => {
    console.log(`Server started at ${host}:${port}`)
    console.log(process.argv) // Параетры запуска
    /*
   [
    'C:\\Program Files\\nodejs\\node.exe', // Путь до node.exe
    'C:\\Users\\Maxima\\IdeaProjects\\JS-delta\\lesson-30\\1.simple-server\\server.js', // Путь до файла
    '12', // Наши параметры
    'test',
    '44'
  ]
  */})

process.on('uncaughtException', (err) => console.log(err))
