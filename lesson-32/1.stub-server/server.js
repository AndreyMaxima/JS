const app = require('express')()
const fs = require('fs')

const createPaginationCallback = ({pageName, limitName}, data) => (req, res) => {
  res.json(data.slice(req.query[pageName], req.query[limitName]))
}

const createFindByParamCallback = (paramName, fieldName, data) => (req, res) => {
  res.json(data.find((elem) => elem[fieldName] == req.params[paramName]))
}

function StubSever(configPath) {
  try {
    const config = JSON.parse(fs.readFileSync(configPath, 'utf8'))
    const {host, port, routes} = config;
    routes.forEach(({path, method, data, pagination}) => {
      if (pagination) {
        if(pagination.type === "query") {
          app[method.toLowerCase()](path, createPaginationCallback(pagination, data))
        } else if(pagination.type === "params") {
          app[method.toLowerCase()](path, createFindByParamCallback(pagination.paramName, pagination.fieldName, data))
        }
      } else {
        app[method.toLowerCase()](path, (req, res) => res.json(data))
      }
    })
    app.listen(port, host, () => console.log(`Stub server started at http://${host}:${port}`))
  } catch (e) {
    console.error(e)
  }
}

module.exports = StubSever
