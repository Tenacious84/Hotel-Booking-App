const { registerUser } = require('../Controller/userController')
const express = require('express')
const router = express()

router.post('/signup', registerUser)

module.exports = router
