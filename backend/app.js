const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 5001

app.use(require('cors')({ origin: /localhost/ }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

mongoose.connect('mongodb://localhost/weatherdb')

const userController = require('./routes/userController')
app.use('/user', userController)

const weatherController = require('./routes/weatherController')
app.use('/weather', weatherController)

app.listen(port, () => console.log(`server is running on port ${port}`))