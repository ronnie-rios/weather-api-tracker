import React, { useEffect, useContext } from 'react'
import WeatherContext from './context/WeatherContext'
import Spinner from '../layout/Spinner'

function Weather() {
  const { weatherData, loading } = useContext(WeatherContext)

  // useEffect(() => {
  //   fetchWeather()
  // }, [])
  

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