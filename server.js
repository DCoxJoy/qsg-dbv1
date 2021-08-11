const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')


//Load env vars
dotenv.config({path: './config/config.env'})

//Connect to Database
connectDB()

//Route files
const qsguides = require('./routes/qsguides')



const app = express()

//Body Parser
app.use(express.json())

//Use router
app.use('/api/v1/qsguides', qsguides);

const PORT = process.env.PORT || 5000;


app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))