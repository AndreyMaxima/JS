const testObj = {
    key: 'value',
    numKey: 4,
    arr: [1,2,true,'string', {key: 'value'}],
    bol: true,
    childObj: {
        numKey: 4,
        arr: [1,2,true,'string'],
        bol: true,
    }
}

const json = JSON.stringify(testObj) // Перевод объекта в формат JSON
const jsonObj = JSON.parse(json) // Преобразование JSON в JS-объект

const swapi = { // Объект для бращения к API
    getMain(callback, errorCallback) { // Получение основной информации
        fetch('https://swap!i.dev/api/')
            .then(response => {
                console.log(response.status)
                return response
            })
            .then(response => {
                // response.text() // Возвращает промисс с телом ответа в виде строки
                return response.json(); // Возвращает промисс с телом ответа в виде JSON. Нельзя использовать один метод после другого
            })
            .then(callback) // Коллбек для результата
            .catch(err => errorCallback(`SWAPI getMain завершился ошибкой: ${err}`)) // Обработка ошибки в коллбеке для ошибки
    },
    getFilms(callback, errorCallback) { // Получение информации о фильмах
        fetch('https://swapi.dev/api/films/')
            .then(response => response.json())
            .then(callback)
            .catch(errorCallback)
    }
}

function printApiPoint(obj) {
    Object.keys(obj).forEach(key => {
        const div = document.createElement('div')
        div.innerHTML = `<span>${key}</span>:<a href="${obj[key]}">${obj[key]}</a>`
        document.body.append(div)
    })
}

swapi.getMain(printApiPoint, console.error)
swapi.getFilms(console.log)