import { types, ModelActions, flow } from "mobx-state-tree"

const WEATHER_API_KEY = "ecce6d62e7dc471a5c8b99d23d224486"
const CITY = "seattle"

interface OpenWeatherResponseMain {
  temp: number;
  humidity: number;
}

interface OpenWeatherResponseWeather {
  description: string
}

interface OpenWeatherResponse {
  main: OpenWeatherResponseMain;
  weather: OpenWeatherResponseWeather[];
}
const fetchWeatherData = async (): Promise<OpenWeatherResponse> => {
  const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${WEATHER_API_KEY}`)
  console.log(data)
  return data.json()
}

const Weather = types.model("Weather", {
  temperature: types.number,
  humidity: types.number,
  description: types.string,
  status: types.string,
})
  .actions((self): ModelActions => ({
    getTheWeather: flow(function* fetchWeather(){
      self.status = "pending"
      try {
        const weatherData: OpenWeatherResponse = yield fetchWeatherData()
        self.temperature = weatherData.main.temp
        self.humidity = weatherData.main.humidity
        self.description = weatherData.weather.map((w) => w.description).join(" ")
        self.status = "loaded"
      } catch (error) {
        console.log(error)
      }
    }),
  }))

export default Weather
