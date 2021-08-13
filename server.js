const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')


//Load env vars
dotenv.config({path: './config/config.env'})

//Connect to Database
connectDB()

//Route files
const qsguides = require('./routes/qsguides')
const exphbs  = require('express-handlebars');


const app = express()

//Handlebars 
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//Entry Route Index
const title = 'Hi There'
app.get('/',(req, res) => {
    res.render('Index', {
        title: title
    })
})

//About Route
app.get('/about',(req, res) => {
    res.render('About')
})


//Body Parser
app.use(express.json())

//Use router
app.use('/api/v1/qsguides', qsguides);

const PORT = process.env.PORT || 3000;


app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))