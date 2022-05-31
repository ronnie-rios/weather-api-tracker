import axios from "axios"
const API_TOKEN = process.env.REACT_APP_API_KEY

const weather = axios.create({
  // method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
    'X-RapidAPI-Key': API_TOKEN
  }
})

export const fetchWeather = async (text) => {
    const params = new URLSearchParams({
      q: text,
    });
    
    const response = await weather.get(`https://weatherapi-com.p.rapidapi.com/current.json?${params}`)
    return response.data
  }
