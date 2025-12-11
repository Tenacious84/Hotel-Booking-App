const mongoose = require('mongoose')

const savedJobSchema = new mongoose.Schema({
    jobId: { type: String, required: true }
})

module.exports = mongoose.model('SavedJob', savedJobSchema)