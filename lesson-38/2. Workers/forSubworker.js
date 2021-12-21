importScripts('./utils.js')

onmessage = function (event) {
  console.log('subworker start')
  const [a, b] = event.data
  // throw new Error('БЕДА!')
  for(let i = 0; i<=10e8; i++) {} // Имитация бурной деятельности
  console.log('subworker done')
  postMessage(div(a, b)) // Отправка сообщения с результатом результата
}
