const fs = require('fs')

function readFile() {

  try { // При синхронном чтении, использовать try/catch дабы скрипт не завершился ошибкой
    const file = fs.readFileSync( // Прочитать файл синхронно
      './fileForRead', //Путь к файлу
      'utf8' // Кодировка (если не указать, будет вохвращен buffer)
    )
  } catch (e) {
    console.log(e)
  }

  fs.readFile( // Прочитать файл асинхронно
    './fileForRead', //Путь к файлу
    'utf8', // Кодировка
    (err, data) => { // Сallback, вызываемф после прочтения
      if (err) {
        // console.error(err)
      } else {
        // console.log(data)
      }
    }
  )

  const rs = fs.createReadStream( // Чтение файла через поток
    './filesForRead', // Путь к файлу
    { // Объект с настройками (можно передать строку с кодировкой)
      encoding: 'utf8', //Кодировка
      autoClose: true //Автоматическое закрытие потока
    })

  rs.on('data', (data) => { // Колбэк при удачном чтении файла
    // console.log(data)
  })
  rs.on('error', err => console.error(err)) // Коллбек при ошибке чтения
}

function readDir() {
  fs.readdir( // Асинхронное чтение директории
    'dir', // путь
    'utf8', // кодировка
    (err// ошибки
      , files// массив имён файлов и папок
    ) => {
      if (err) {
        console.log(err)
      } else {
        files.forEach(file => {
          console.log(file)
          try {
            console.log(fs.readFileSync(`dir/${file}`, 'utf8'))
          } catch (e) {
            console.log(e)
          }
        })
      }
    })

  try {
    console.log(fs.readdirSync('dir', 'utf8'))
  } catch (e) {
    console.error(e)
  }
}

function writeFile() {
  fs.writeFile( // Асинхронная запись файла (содержимое перезаписывается)
    './file', //Путь
    'Другая строчка текста',//Содержимое
    'utf8', //Кодировка
    (err) => { //Коллбек
      console.log(err ? err : 'done')
    })

  try {
    fs.writeFileSync('./file', 'CONTENT', 'utf8');
  } catch (e) {
    console.error(e)
  }
}

function appendFile() {
  fs.appendFile( // Добавление записи в конец файла (асинхронно)
    'file',
    ' приписка',
    'utf8',
    (err) => console.log(err ? err : 'done')
  )

  try {
    fs.appendFileSync('./file', 'CONTENT', 'utf8');
  } catch (e) {
    console.error(e)
  }
  const wr = fs.createWriteStream('file', 'utf8') // Запись через stream
  wr.on('finish', () => console.log('done'))
  wr.on('error', (e) => console.error(e))
  wr.write('Первая строка')
  wr.write('\nВторая строка')
  wr.end()
}

function makeDir() {

  fs.mkdir('newdir/newsubdir', {
      recursive: true // Создавть все дериктории до конечно
    },
    (err) => console.log(err ? err : 'done')
  )

  try {
    fs.mkdirSync('newsyncDir/subdir', {
      recursive: true
    })
  } catch (e) {
    console.log(e)
  }
}

function delFile() {
  fs.unlink('file', (err) => console.log(err ? err : 'done')) // Асинхронное удаление
  fs.unlinkSync('file') // Синхронное удаление
}

function delDir() {
  fs.rmdir('./newdir/newsubdir', (err) => console.log(err ? err : 'done')) // Асинхронное удаление
  fs.rmdirSync('./newdir/newsubdir') // Синххронное удаление
}

console.log(fs.existsSync('./dir'))
console.log(fs.existsSync('./dirNot'))
console.log(fs.existsSync('./fileForRead'))
console.log(fs.existsSync('./fileForReadNot'))

