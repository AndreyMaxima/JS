const ws = require('ws');
const {v4:generateUUID} = require('uuid')
const server = new ws.Server(
  {
    port: 9000
  }
)

const clients = {}

server.on('connection', (client) => {
  const uuid = generateUUID()
  clients[uuid] = client
  client.send(JSON.stringify({
    type: 'id',
    id: uuid
  }))
  client.on('close', () => delete clients[uuid])
  client.on('message', (json) => {
    const message = JSON.parse(json)
    if(message.type === 'sendMessage') {
      clients[message.recId].send(JSON.stringify(
        {
          type: 'message',
          text: message.text,
          owner: message.ownerId
        }
      ))
    }
  })
})
