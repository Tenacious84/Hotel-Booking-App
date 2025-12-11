const mongoose = require('mongoose')

const companySchema = new mongoose.Schema({
    companyName: { type: String, required: true, unique: true, trim: true },
    description: { type: String, required: true, minlength: 20, maxlength: 500 },
    website: { type: string, required: true, unique: true },
    location: { type: string, required: true, },
    industry: { type: string, required: true, }

}, { timestamps: true })

module.exports = mongoose.model('Company', companySchema)