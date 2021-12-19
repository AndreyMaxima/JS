const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {MONGOOSE_URI} = require('./config/mongoose')
const User = require('./models/userModel')
const {JWT_SECRET} = require('./config/jwt')


mongoose.connect(MONGOOSE_URI)
  .then(() => console.log('DB CONNECTED'))
  .catch(console.error)

const app = express()
app.use(cors())
app.use(express.json())

app.post('/login', async (req, res) => {
  const {login, password} = req.body
  try {
    const user = await User.findOne({login})
    if(user) {
      if(bcrypt.compareSync(password, user.password)) {
        res.status(200)
          .json({token: jwt.sign({
              login: user.login
              }, JWT_SECRET
            )})
      } else {
        res.status(401).json({message: 'invalid password'})
      }
    } else {
      res.status(404).json({message: `user with login ${login} not found`})
    }
  } catch (e) {
    res.status(500).json({message: 'find user error'})
  }
})

app.post('/registration', async (req, res) => {
  const {login, password} = req.body;
  try {
    if(await User.findOne({login})) {
      res.status(409).json({message: `user with login ${login} already exist`})
      return 0
    }
  } catch (e) {
    res.status(500).json({message: `error wile try get user with login ${login}`})
  }
  try {
    const salt = bcrypt.genSaltSync(15)
    await new User({
      login,
      password: bcrypt.hashSync(password, salt)
    }).save()
    res.status(201).json({login, password})
  } catch (e) {
    res.status(500).json({message: 'user didn`t create'})
  }
})

app.get('/getUserById/:id', async (req, res) => {
  const { id } = req.params
  try {
    const user = await User.findById(id)
    user ? res.status(200)
      .json(user) : res.status(404)
      .json({message: `user with id ${id} not found`})
  } catch (e) {
    res.sendStatus(500)
  }
})

app.get('/getUserList', async (req, res) => {
  const { start, limit } = req.query
  try {
    const users = await User.find().skip(Number(start)).limit(Number(limit))
    users.length !== 0 ? res.status(200)
      .json(users) : res.status(404)
      .json({message: `users not found`})
  } catch (e) {
    res.sendStatus(500)
  }
})

app.listen(5000, () => console.log('app start at http://localhost:5000'))
