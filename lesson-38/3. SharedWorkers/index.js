const worker = new SharedWorker('./sharedWorker.js', 'anyname3')
const input = document.getElementById('input')
const array = [1,2,3,4]
input.addEventListener('change', (e) => {
  worker.port.postMessage([e.target.value, array])
})
worker.port.onmessage = (e) => {
  input.value = e.data[0]
  console.log(array) // Исходный массив не модифицирован
  console.log(e.data[1])
}
