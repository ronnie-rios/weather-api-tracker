const express = require('express')
const router = express.Router()
const User = require('../models/User')

router.get('/', (req, res) => {
    User.find()
    .then(users =>
        res.status(200).json(users))
    .catch(err => console.log(err))
})

router.post('/', (req, res) => {
    User.create(req.body)
    //pass in weather obj into the body specifically 
    .then(newUser => 
        res.status(200).json(newUser))
    .catch(err =>console.log(err))
})

module.exports = router