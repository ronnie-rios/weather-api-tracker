import React, { useContext } from 'react'
import WeatherContext from './context/WeatherContext'
import Spinner from '../layout/Spinner'
import User from './User'
function Weather() {
  const { weatherData, loading } = useContext(WeatherContext)

  if (!loading) {
      return (
    <div>
      <ul>
        <li>location: {weatherData.location.name}</li>
        <li>condition: {weatherData.current.condition.text}</li>
        <li>weather feels like: {weatherData.current.feelslike_f}</li>
        <li>current temp: {weatherData.current.temp_f}</li>
      </ul>
      <User 
        location={weatherData.location.name}
        condtion={weatherData.current.condition.text}
        feelsLike= {weatherData.current.feelslike_f}
        currentTemp={weatherData.current.temp_f}
      />
    </div>
      )
  } else {
    return <h3>{<Spinner />}</h3>
  }

}

export default Weather