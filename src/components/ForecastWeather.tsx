import type { WeatherApiResponse } from "../types/weather";
import dayjs from 'dayjs';
import './ForecastWeather.css';

interface Props {
  forecast: WeatherApiResponse | null
}

export function ForecastWeather({ forecast }: Props) {
  if (!forecast) {
    return <div className='forecast-container'>No Data</div>
  }
  const dailyforecast = forecast.list.filter((item) => item.dt_txt.includes('12:00:00'));

  return (
    <div className="forecast-container">
      {dailyforecast.map((forecast, idx) => (
        <div key={idx} className="weather">
          <h3>{dayjs(forecast.dt_txt).format("ddd")}</h3>
          <img src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`} width='50' height='50'/>
          <h3>{forecast.main.temp.toFixed(0)}&deg;C</h3>
        </div>
      ))}
    </div>
  )
}