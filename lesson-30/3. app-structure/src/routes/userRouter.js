const router = require('express').Router()
const UserService = require('../services/userService')

router.get('/getUserList', UserService.getUserList)
router.post('/createUser', UserService.createUser)

module.exports = router
