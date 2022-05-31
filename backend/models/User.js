const mongoose = require('mongoose')
// const Weather = require('./Weather')
const UserSchema = new mongoose.Schema({
    name: String,
    weather: []
})

const User = mongoose.model('User', UserSchema)
module.exports = User