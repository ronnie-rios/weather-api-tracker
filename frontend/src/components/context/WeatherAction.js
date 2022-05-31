import axios from "axios"
const API_TOKEN = process.env.REACT_APP_API_KEY

const weather = axios.create({
  // method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
    'X-RapidAPI-Key': API_TOKEN
  }
})
// const weatherPost = axios.create({
//     method: 'POST',
//     body: JSON.stringify(data),
//     headers: {
//       'Content-Type': 'application/json'
//     }
// })
export const fetchWeather = async (text) => {
    const params = new URLSearchParams({
      q: text,
    });
    
    const response = await weather.get(`https://weatherapi-com.p.rapidapi.com/current.json?${params}`)
    return response.data
  }

  // export const postWeather = async(body) => {
  //   const response = await 
  // }