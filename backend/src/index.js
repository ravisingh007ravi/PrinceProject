const express = require('express')
const mongoose = require('mongoose')
const router = require('./routes/routes')

const app = express()
app.use(express.json())

const port = 8080;
const DB ='mongodb+srv://ravi6680singh:rm1ah4tPSRyenb0X@cluster0.viocq1u.mongodb.net/'

mongoose.connect(DB)
    .then(() => console.log('MongoDB is connected'))
    .catch((e) => console.log(e))

app.use('/', router)

app.listen(port, () => console.log('Server is running on port ', port));