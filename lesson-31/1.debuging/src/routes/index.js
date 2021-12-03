const router = require('express').Router()
const userRouter = require('./userRouter')

router.use('/users', userRouter)
// router.use('/comments', commentRouter)
// router.use('/posts', postsRouter)

module.exports = router
