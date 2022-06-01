const express = require('express')
const router = express.Router()
const Weather = require('../models/Weather')

router.get('/', (req, res) => {
    Weather.find()
    .then(weather =>
        res.status(200).json(weather))
    .catch(err => console.log(err))
})

module.exports = router