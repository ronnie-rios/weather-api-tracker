import { createContext, useState } from "react";

const WeatherContext = createContext()

const API_TOKEN = process.env.REACT_APP_API_KEY

export const WeatherProvider= ({ children }) => {
    const [weatherData, setWeatherData] = useState()
    const [loading, setLoading] = useState(true)

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

      return <WeatherContext.Provider value ={{
          weatherData,
          loading,
          fetchWeather
      }}>
          {children}
      </WeatherContext.Provider>
}

export default WeatherContext