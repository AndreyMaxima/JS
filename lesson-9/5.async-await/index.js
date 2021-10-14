function returnPromise(a, b) {
    return new Promise((res) => res(a + b));
}

async function sum(a, b) { // Фкнкции с ключевым словом async возвращают promise
    return a + b; // Возращённый результат будет обёрнут в промис и доступен в блоке then
}

async function createSumPromise(a, b) {
    return new Promise((res) => res(a + b)); // Если явно вернуть промис, результат не поменяется
}

const sumPromise = sum(6, 5)
    .then(console.log)

//--------------------------------------------------------------------------------


const mockServerResponse = () =>
    new Promise(res => setTimeout(() => res('Ответ от сервера'), 3000));

mockServerResponse()
    .then(console.log)

async function asyncFunctionForServerResponse() {
    const response = await mockServerResponse(); // await аставляет ждать завершения промиса справа, после чего продолжать работу. Работает только в асинхронных функциях
    console.log(response);
}

console.log(asyncFunctionForServerResponse());

//-----------------------------------------------------------------------------------

const mockServerError = () =>
    new Promise((res, rej) => setTimeout(() => rej('Случилась беда'), 3000));

async function asyncFunctionForServerError() {
    try {
        const result = await mockServerError();
    } catch (e) {
        console.log(e) // Если используем try...catch при провале промиса, можно обработать как обычную ошибку
    }
}

async function asyncFunctionForServerErrorWithoutTry() {
    const result = await mockServerError().catch(console.log); // Если промис провалился, а try...catch не используется, вернётся проваленный промис
    console.log(result) //Значение присвоено не будет
}

asyncFunctionForServerErrorWithoutTry();