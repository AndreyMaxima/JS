const router = require('express').Router()
const UserService = require('../services/userService')

router.use('/getUserList', UserService.getUserList())

module.exports = router
