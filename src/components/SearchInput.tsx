import { useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import type { WeatherApiResponse } from "../types/weather";
import './SearchInput.css';

interface Props{
  setData: Dispatch<SetStateAction<WeatherApiResponse | null>>;
  setForecast: Dispatch<SetStateAction<WeatherApiResponse | null>>
}

export function SearchInput({ setData, setForecast}:Props){
  const [input, setInput] = useState('');
  const key: string = 'fa6af6db72d0510f5a02dcd81de3dea9';
  const fetchData = async() => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${key}`);

    if (!response.ok) {
      setData(null);
      return;
    }
    const data = (await response.json()) as WeatherApiResponse;
    setData(data);
    setInput('');
  }
  const forecastWeather = async() =>{
    const forecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${input}&appid=${key}&units=metric`);
    if(!forecastResponse.ok){
      setForecast(null);
      return;
    }
    const forecastData = await forecastResponse.json();
    setForecast(forecastData);
  };

  const handleSearch = ()=> {
    fetchData();
    forecastWeather();
  }
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) =>{
    if(event.key === 'Enter'){
      fetchData();
      forecastWeather();
    }
  }
  return(
    <div className="input-container">
      <input 
        type='text'
        placeholder='Name of City'
        className='input-box'
        value={input}
        onChange={(e)=> setInput(e.target.value)}
        onKeyDown={handleKeyDown}/>
      <button className='search-btn' onClick={handleSearch}>Search</button>
    </div>
  )
}