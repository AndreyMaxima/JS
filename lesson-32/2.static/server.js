const express = require('express');
const app = express();

const host = '127.0.0.1'
const port = 3000

console.log(__dirname)
app.use('/imgs', express.static(`${__dirname}/static`))
app.listen(port, host, () => console.log(`Server started at http://${host}:${port}`))
