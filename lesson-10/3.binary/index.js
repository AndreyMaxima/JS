const arrayBuffer = new ArrayBuffer(1024) // Выделение памяти под бинарные данные
console.log(arrayBuffer)

const uint8 = new Uint8Array(arrayBuffer) // Создание объекта-представления
console.log(uint8)

uint8[0] = 234
const uint16 = new Uint16Array(arrayBuffer)
console.log(uint16)
uint16[2] = 65535
console.log(uint8)
const uint32 = new Uint32Array(arrayBuffer)
const float32 = new Float32Array(arrayBuffer)

const str = 'Hello, world!'

const encoder = new TextEncoder(); // Создание объекта encoder'a

const binaryStr = encoder.encode(str) // Кодирование строки в бинарный массив с представлением UInt8Array
console.log(binaryStr)

const decoder = new TextDecoder('utf-8', {
    fatal: true
}) // Создание декодера

console.log(decoder.decode(binaryStr))

const unit8arrayStr = new Uint8Array([72, 101, 108, 108, 111])

console.log(decoder.decode(unit8arrayStr))

let blob = new Blob(['Hello, BLOB!'], {
    type: 'text/plain'
})

const url = URL.createObjectURL(blob) // Генерация "внутреннего" URL на объект
console.log(url)
document.getElementById('link').href = url //Присвоеванье URL ссылке

function autoDownload() { // Загрузка файла без клика по ссылке
    const link = document.createElement('a');
    link.href = url
    link.download = 'aoutoDownload.txt'
    link.click()
}

// blob = null
// URL.revokeObjectURL(url) // Удаление ссылки на файл

//-------------------------------------------------------------------------
const reader = new FileReader() // Создание файл-риадера
reader.readAsDataURL(blob) // Преобразование blob в base64url
reader.onload = () => { // Функция будет вызвана по окончании преобразования
    console.log(reader.result) // Результат обработки
    document.getElementById('base64link').href = reader.result
}
