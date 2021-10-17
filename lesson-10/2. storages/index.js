localStorage.setItem('localKey', 'localValue'); // Установка пары ключ-значение в localStorage
sessionStorage.setItem('sessionKey', 'sessionValue');// Установка пары ключ-значение в sessionStorage
console.log(localStorage.getItem('localKey')) // Получение данных
console.log(sessionStorage.getItem('sessionKey')) // sessionStorage очищается при закрытии браузера

const obj = {
    key: 'value',
    arr: [1, 2, 3, 5, 'arrValue']
}
localStorage.setItem('localObj', JSON.stringify(obj))

const localObj = JSON.parse(localStorage.getItem('localObj'));

console.log(localObj)

// localStorage.clear() // Очистить хранилище
localStorage.removeItem('localKey') // Удаление пары ключ-значение из хранилища
console.log(localStorage.getItem('localKey'))
console.log(localStorage.key(0)) // получение значения по индексу
console.log(localStorage.length) // Вернёт кол-во записей в localStorage
