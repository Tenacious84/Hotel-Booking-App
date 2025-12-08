const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    role: { type: String, required: true, enum: ['candidate', 'company'], default: 'candidate' },
    phone: { type: string, required: true, unique: true, match: /^\+?[0-9]{8-15}$/ },
    password: { required: true, unique: true }
})