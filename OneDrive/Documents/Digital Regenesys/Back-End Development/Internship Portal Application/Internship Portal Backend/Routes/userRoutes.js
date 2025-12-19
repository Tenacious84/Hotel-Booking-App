const { registerUser, loginUser, getUsers, getProfile } = require('../Controller/userController')
const express = require('express')
const router = express()

router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/', getUsers)
router.get('/profile/:id', getProfile)








module.exports = router
