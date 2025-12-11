const { request } = require('express')
const User = require('../Models/userModel')
const generateToken = require('../Utils/generateJWT')

const registerUser = async (req, res) => {
    const { password, email, name, phone } = req.body

    const userExists = await User.findOne({ email })

    if (userExists) {
        return res.status(400).json(
            'User already exists, please login instead.'
        )
    }


    const user = await User.create({ password, email, name, phone })

    res.status(200).json('User has been successfully created.',
        {
            _id: user._id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            token: generateToken(user._id, user.role),
            role: user.role
        })



}

module.exports = { registerUser }