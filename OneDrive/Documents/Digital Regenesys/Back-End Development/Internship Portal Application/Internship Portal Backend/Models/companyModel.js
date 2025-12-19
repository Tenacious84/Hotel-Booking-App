const mongoose = require('mongoose')

const companySchema = new mongoose.Schema({
    companyName: { type: String, required: true, unique: true, trim: true },
    description: { type: String, required: true, minlength: 20, maxlength: 500 },
    website: { type: String, required: true, unique: true },
    location: { type: String, required: true, },
    industry: { type: String, required: true, }

}, { timestamps: true })

module.exports = mongoose.model('Company', companySchema)