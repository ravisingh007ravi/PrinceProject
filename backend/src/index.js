const express = require('express')
const mongoose = require('mongoose')
const router = require('./routes/routes')
require('dotenv').config()


const app = express()
app.use(express.json())

const port = 8080;

mongoose.connect(process.env.MongoDBURL)
    .then(() => console.log('MongoDB is connected'))
    .catch((e) => console.log(e))

app.use('/', router)

app.listen(port, () => console.log('Server is running on port ', port));