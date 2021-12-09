const path = require('path')

console.log(path.basename('/src/any/dir/file.js')) // file.js возвращает конечную часть пути
console.log(path.basename('/src/any/dir/file.js', '.js')) // file возвращает конечную часть пути без указанного расширения
console.log(path.dirname('/src/any/dir/file.js')) // /src/any/dir возвращается путь до папки
console.log(path.extname('/src/any/dir/file.js')) // .js возвращается расширение
console.log(path.isAbsolute('/src/any/dir/file.js')) // Является ли путь обсолютным
console.log(path.isAbsolute('src/any/dir/file.js'))

console.log(path.join('/src/any', '../other/..', 'app/server.js')) // Формирование пути (с переходом по директориям)
console.log(path.normalize('src/\\other\\\//server.js')) // src\other\server.js нормализация пути
const parsedPath = path.parse('/src/app/index.js') // Парсинг пути в объект
console.log(JSON.stringify(parsedPath))
console.log(path.relative('/src/config/app.js', '/src/app/dir/index.js')) // Возвращает относительный путь
console.log(path.resolve('/src/config/', 'index.js')) // Возвращает обсолютный путь
console.log(__dirname)
console.log(__filename)

