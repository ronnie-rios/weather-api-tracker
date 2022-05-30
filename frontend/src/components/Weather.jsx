import React, { useEffect, useState } from 'react'
const API_TOKEN = process.env.REACT_APP_API_KEY

function Weather() {
  const [weatherData, setWeatherData] = useState([])

  useEffect(() => {
    fetchWeather()
  }, [])
  
  const fetchWeather = async () => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
        'X-RapidAPI-Key': API_TOKEN
      }
    };
    
    const response = await fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=austin', options)
    const data = await response.json()
    setWeatherData(data)
    console.log(data);
  }
  return (
    <div>
      <ul>
        <li>location: {weatherData.location.name}</li>
        <li>condition: {weatherData.current.condition.text}</li>
        <li>weather feels like: {weatherData.current.feelslike_f}</li>
        <li>current temp: {weatherData.current.temp_f}</li>
      </ul>
    </div>
  )
}

export default Weather