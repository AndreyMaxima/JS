const ports = []
self.addEventListener('connect', (event) => {
  const port = event.ports[0]
  ports.push(port)
  port.onmessage = (messageEvent) => {
    const [text, array] = messageEvent.data
    array.push(20)
    ports.forEach(nextPort => nextPort.postMessage([text, array]))
  }
})
