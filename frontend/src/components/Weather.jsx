import React, { useEffect, useState } from 'react'
import Spinner from '../layout/Spinner'
const API_TOKEN = process.env.REACT_APP_API_KEY

function Weather() {
  const [weatherData, setWeatherData] = useState()
  const [loading, setLoading] = useState(true)

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
    setLoading(false)
  }

  if (!loading) {
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
  } else {
    return <h3>{<Spinner />}</h3>
  }

}

export default Weather