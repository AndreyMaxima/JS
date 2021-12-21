const worker = new Worker('./forWorker.js')
const input1 = document.getElementById('input-1')
const input2 = document.getElementById('input-2')
const input3 = document.getElementById('input-3')


function handleClick() {
  alert('click')
}

function handleCalculateClick() {
  worker.postMessage([input1.value, input2.value, input3.value]) // Вызов воркера
}

worker.onmessage = (event) => alert(event.data) // Обработка результата работы воркера
worker.onerror = (event) => console.error(event) // Обработка ошибки
document.getElementById('btn').addEventListener('click', handleClick)
document.getElementById('calc-btn').addEventListener('click', handleCalculateClick)

console.log(window.Worker ? 'воркеры доступны' : 'воркеры не поддерживаются') // Проверка на поддержку воркеров
