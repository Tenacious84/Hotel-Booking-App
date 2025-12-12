const { registerUser } = require('../Controller/userController')
const express = require('express')
const router = express()

router.post('/register', registerUser)

module.exports = router
