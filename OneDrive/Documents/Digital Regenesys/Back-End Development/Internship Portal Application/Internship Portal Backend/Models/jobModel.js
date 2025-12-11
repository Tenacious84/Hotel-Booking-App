const mongoose = require('mongoose')

const jobSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true, minlength: 20, maxlength: 500, },
    jobType: { type: string, enum: ['full-time', 'internship'], default: 'full- time' },
    skills: { type: String, required: true },
    openings: { type: Number, min: 1 },
    remuneration: { type: Number, required: true, },
    location: { type: string, required: true, enum: ['remote', 'onsite'], default: 'onsite' },
    deadline: { type: Date, required: true }
}, { timestamps: true })

module.exports = mongoose.model('Job', jobSchema)

