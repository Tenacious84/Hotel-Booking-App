const express = require('express')
const dontenv = require('dotenv')
const connectDB = require('./Config/connectDB')
const userRoutes = require('./Routes/userRoutes')




dontenv.config()
connectDB()
const app = express()


app.use(express.json())
app.use('/api/user', userRoutes)

const PORT = process.env.PORT

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`))