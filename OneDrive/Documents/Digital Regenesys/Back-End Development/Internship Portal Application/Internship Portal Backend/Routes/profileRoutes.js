const { getProfile, createProfile } = require('../Controller/profileController')
const express = require('express')
const router = express()


router.get('/:id', getProfile)
router.post('/createProfile', createProfile)

module.exports = router
