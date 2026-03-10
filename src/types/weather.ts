export interface WeatherMain {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  humidity: number;
}

export interface Weather {
  main: string;
  description: string;
  icon: string;
}

export interface list{
  dt_txt: string;
  main: WeatherMain;
  weather: Weather[];
}

export interface WeatherApiResponse {
  name: string;
  main: WeatherMain;
  list: list[]
  weather: Weather[];
  wind: {
    speed: number;
  };
}
