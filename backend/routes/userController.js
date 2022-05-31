const express = require('express')
const router = express.Router()
const User = require('../models/User')

router.get('/', (req, res) => {
    User.find()
    .then(users =>
        res.status(200).json(users))
})

router.post('/', (req, res) => {
    User.create(req.body)
    .then(newUser => 
        res.status(200).json(newUser))
    .catch(err =>console.log(err))
})

module.exports = router