const express = require('express')
const router = express()
const { getCompanyJobs, getJobs, createJob, updateJob, deleteJob } = require('../Controller/jobController')


router.get('/:id', getCompanyJobs)
router.get('/', getJobs)
router.post('/createJob', createJob)
router.put('/updateJob', updateJob)
router.delete('/deleteJob', deleteJob)

module.exports=router