import React from 'react'
import './App.css';
import Home from './components/Home';
import Weather from './components/Weather';
import { WeatherProvider } from './components/context/WeatherContext'
function App() {
  return (
  <WeatherProvider>
    <div className="App">
      <Home />
      <Weather />
    </div>
    </WeatherProvider>
  );
}

export default App;
