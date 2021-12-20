const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  login: String,
  password: String
})

module.exports = mongoose.model('user', userSchema)
