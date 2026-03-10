import './WeatherData.css';
import type { WeatherApiResponse } from "../types/weather";

interface Props{
  data: WeatherApiResponse | null;
}
export function WeatherData({data}:Props) {
  console.log(data);
  if (!data) {
    return (
      <div className='data-container'>
        <div className='data'>
          <h3>No weather data available</h3>
        </div>
      </div>
    );
  }

  return (
    <div className='data-container'>
      <div className='data'>
        <h1>{data.name}</h1>
        <h2>{data.main.temp_min.toFixed(0)}&deg;C</h2>
        <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} width='50' height='50'/>
        <h3>{data.weather[0].description}</h3>
        <h3>Feels like: {data.main.feels_like.toFixed(0)}&deg;C</h3>
        <h3>Humidity: {data.main.humidity}%</h3>
        <h3>Wind: {data.wind.speed} m/s</h3>
      </div>
    </div>

  )
}