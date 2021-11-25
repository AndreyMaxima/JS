const input = document.getElementById('text-input')
document.getElementById('send-payload-btn').addEventListener('click', () => {
  socket.send(JSON.stringify({
    type:'echo',
    payload: input.value,
    delay: 1500
  }))
})
document.getElementById('send-counter-btn').addEventListener('click', () => {
  socket.send(JSON.stringify({
    type:'counter',
    interval: 1500,
    take: input.value,
  }));
})
//-----------------------------------------------------------------------
const socket = new WebSocket( // Запрос на открытие соединения
  'ws://localhost:8080' // URL для подключения
)

socket.onmessage = (e) => { // Обработчик сообщений от сервера◘
    console.group('пришло сообщение')
    console.log(JSON.parse(e.data))
    console.groupEnd()
}

socket.addEventListener('open', (e) => { // Функция, вызываемая после успешного открытия соединения
  console.group('соединение открыто')
  console.log(e)
  console.groupEnd()

  socket.send(JSON.stringify({
    type:'echo',
    payload: 'test',
  }))
})

socket.onclose = (e) => { // Обработчик закрытия соединения
  console.group('соединение закрыто')
  console.log(e)
  console.groupEnd()
}

console.log(socket.bufferedAmount) // Кол-во байт буфферизированных (пока неотправленных) данных
console.log(socket.readyState) // Состояние текущего соединения
// 0 - Соединение ещё не установлено
// 1 - Обмен данными
// 2 - Соединение щакрывается
// 3 - Соединение закрыто

setTimeout(
  () => socket.close( // Закрытие соединения по инициативе клиента
  1000, // Код щакрытие
  'GOODBYE' // Описание
), 500)
setTimeout(() =>console.log(socket.readyState), 1000)
