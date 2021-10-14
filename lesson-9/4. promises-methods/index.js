Promise.all([ // Дожидается отработки всех промисов, возвращает промис с результатом в виде массива с результатами каждого промиса
    new Promise((res, rej) => res(1)),
    new Promise((res, rej) => res(2)),
    new Promise((res, rej) => res(3)),
    new Promise((res, rej) => res(4)),
    new Promise((res, rej) => res(5)),
    new Promise((res, rej) => res(6)),
    new Promise((res, rej) => res(7)),
    new Promise((res, rej) => res(8)),
]).then(result => console.log(`1. then ${result}`)) // Здесь будет массив с результатами всех промисов
    .catch(result => console.log(`1. catch ${result}`))// Если очередной проммис завершился ошибкой она будет здесь, результат работы остальных возвращен не будет
    .finally(() => console.log('1.Все промисы отработаны'))

Promise.all([ // Дожидается отработки всех промисов, возвращает промис с результатом в виде массива с результатами каждого промиса
    new Promise((res, rej) => res(1)),
    new Promise((res, rej) => res(2)),
    new Promise((res, rej) => res(3)),
    new Promise((res, rej) => rej(4)),
    new Promise((res, rej) => res(5)),
    new Promise((res, rej) => rej(6)),
    new Promise((res, rej) => res(7)),
    new Promise((res, rej) => res(8)),
]).then(result => console.log(`2. then ${result}`))// Здесь будет массив с результатами всех промисов
    .catch(result => console.log(`2. catch ${result}`))// Если очередной проммис завершился ошибкой она будет здесь, результат работы остальных возвращен не будет
    .finally(() => console.log('2. Все промисы отработаны'))

Promise.allSettled([
    new Promise((res, rej) => res(1)),
    new Promise((res, rej) => rej(2)),
    new Promise((res, rej) => res(3)),
    new Promise((res, rej) => rej(4)),
]).then(result => { // Возвращается массив объектов с статусом и результатом каждого промисса
    const resolvedPromiseResult = [];
    const rejectedPromiseResult = [];
    result.forEach(promiseResult => {
        if (promiseResult.status === 'fulfilled') { // Поле объекта status отражает статус промиса
            resolvedPromiseResult.push(promiseResult.value) // У успешных промисов результат находится в свойстве value
        } else {
            rejectedPromiseResult.push(promiseResult.reason) // У неуспешных промисов ошибка находится в свойстве reason
        }
    })
    console.log(`3. Результаты успешных промисов ${resolvedPromiseResult.join()}`)
    console.log(`3. Ошибки проваленных промисов ${rejectedPromiseResult.join()}`)
}).catch(() => console.log('3. Провален')) //catch не выполняется
.finally(() => console.log('3. Отработал'))

Promise.race([
    new Promise((res, rej) => setTimeout(() => res(1), 4000)),
    new Promise((res, rej) => setTimeout(() => res(2), 2000)),
    new Promise((res, rej) => setTimeout(() => rej(3), 1000)),
    new Promise((res, rej) => setTimeout(() => res(4), 2000)),
]).then(result => console.log(`4. Первый выполнен удачно:${result}`)) // Первый выполненный промис попадёт сюда, если он успешен
.catch(result => console.log(`4. Первый выполнен неудачно: ${result}`)) // Первый выполненный промис попадёт сюда, если он неуспешен
.finally(() => console.log('4. Отработал'))