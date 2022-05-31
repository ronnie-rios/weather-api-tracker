import React, { useState, useContext} from 'react'
import { fetchWeather } from './context/WeatherAction';
import WeatherContext from './context/WeatherContext';

function Form() {
  const [text, setText] = useState('')
  const {weatherData, dispatch } = useContext(WeatherContext)

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    dispatch({ type: 'SET_LOADING'})

    const weatherData = await fetchWeather(text)
    dispatch({ type: 'GET_WEATHER', payload: weatherData})
    setText('')
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='search'
          value={text}
          onChange={handleChange}
        />
        <button type='submit'>search</button>
      </form>
    </div>
  )
}

export default Form