import './App.css';
import { useState } from 'react';
import type { WeatherApiResponse } from './types/weather';
import { SearchInput } from './components/SearchInput'
import { WeatherData } from './components/WeatherData'
import { ForecastWeather } from './components/ForecastWeather';


function App() {
  const [data, setData] = useState<WeatherApiResponse | null>(null);
  const [forecast, setForecast] = useState<WeatherApiResponse | null>(null);
  return (
    <div className="app">
      <div className="container">
        <h1>Weather Explorer</h1>
        <p>Stay updated with the latest weather conditions.</p>
        <SearchInput setData={setData} setForecast={setForecast}/>
        <WeatherData data={data}/>
        <ForecastWeather forecast={forecast}/>
      </div>
    </div>
  )
}

export default App
