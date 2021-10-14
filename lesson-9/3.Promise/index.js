const promise = new Promise(
    function(resolve, reject) { // Функция-исполнитель. Вызывается сразу
        let result = 0; //Генерация результата
        for(result; result<=1e9; result++) {} // Трудоёмкая деятельность
        resolve(result) // Вызывается в успешном случае и принимает сгенерорванный результат
    }
)

const secondPromise = new Promise(
    function(resolve, reject) { // Функция-исполнитель. Вызывается сразу
        let result = 0; //Генерация результата
        for(result; result<=1e9; result++) {} // Трудоёмкая деятельность
        reject('Что-то пошло не так') // Вызывается в успешном случае и принимает ошибку
    }
)

promise
    .then(function callback(result) { // Коллбэк блока then будет выполнен, в случае если всё прошло успешно (был вызван resolve(result))
        console.log(`1. Первый промис успешно отработал. Результат: ${result}`)
        return result / 100 //Будет передано в следующий блок then
    })
    .then((result2) => console.log(`1. Результат предыдущего блока then ${result2}`)) // Принимает результат предыдущего блока then
    .catch((error) => console.log(error))
    .then(() => console.log('1. then после catch '))
    .finally(() => console.log('1. Первый промис отработал')) // Коллбэк в блоке finally будет выполнен в любом случае

secondPromise
    .finally(() => console.log('2. Второй промис отработал'))
    .then(function callback(result) { // Коллбэк блока then будет выполнен, в случае если всё прошло успешно (был вызван resolve(result))
        console.log(`2. Второй промис успешно отработал. Результат: ${result}`)
    })
    .catch((error) => { // Коллбэк блока catch будет выполнен, в случае если промис завершился ошибкой (был вызван reject())
        console.log(`2. Второй промис завершился ошибкой: ${error}`)
        return `2. В then из catch передана ошибка ${error}`
    })
    .catch(() => console.log('2. catch после catch'))
    .then(console.log)


console.log(promise)
console.log(secondPromise)

