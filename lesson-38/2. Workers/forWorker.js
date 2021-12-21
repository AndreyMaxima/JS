onmessage = function (event) {
  const [a, b, c] = event.data // Массив, переданный в postMessage из index.js
  console.log(event)
  console.log('worker start')
  for(let i = 0; i<=10e8; i++) {} // Имитация бурной деятельности
  const subWorker = new Worker('./forSubworker.js')
  subWorker.onmessage = (event) => {
    console.log('worker done:')
    postMessage(event.data)
  } // Отправка сообщения с результатом результата
  subWorker.postMessage([a*b, c])
}
