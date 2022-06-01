const mongoose = require('mongoose')

const WeatherSchema = new mongoose.Schema({
    location: String,
    current_temp: String,
    feels_like: String,
    condition: String
})

const Weather = mongoose.model('Weather', WeatherSchema)
module.exports = Weather