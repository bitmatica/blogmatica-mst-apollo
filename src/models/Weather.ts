import { types } from "mobx-state-tree"

const WEATHER_API_KEY = "ecce6d62e7dc471a5c8b99d23d224486"
const CITY = "seattle"

export interface OpenWeatherResponseMain {
  temp: number;
  humidity: number;
}

export interface OpenWeatherResponseWeather {
  description: string
}

export interface OpenWeatherResponse {
  main: OpenWeatherResponseMain;
  weather: OpenWeatherResponseWeather[];
}
export const fetchWeatherData = async (): Promise<OpenWeatherResponse> => {
  const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${WEATHER_API_KEY}`)
  return data.json()
}

const Weather = types.model("Weather", {
  temperature:  types.number,
  humidity: types.number,
  description: types.string,
  status: types.string,
})

export default Weather
