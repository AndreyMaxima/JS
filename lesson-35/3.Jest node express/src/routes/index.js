const router = require('express').Router()
const userRouter = require('./userRouter')

router.use('/users', userRouter)

module.exports = router
