import { get } from './HttpService'
import { CurrentWeather, DetailedWeather } from '../models/WeatherModel'

export async function autocompleteCity (searchString, session) {
  return get(`
    ${!PRODUCTION ? '' : 'https://cors-anywhere.herokuapp.com/'}https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${searchString}&key=${GOOGLE_API_KEY}&sessiontoken=${session}`)
}

export async function getCurrentWeather (city) {
  const rawWeather = await get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${OPWEATHER_API_KEY}`)
  return new CurrentWeather(rawWeather)
}

export async function getDetailedWeather (city) {
  const rawWeather = await get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=${OPWEATHER_API_KEY}`)
  return new DetailedWeather(rawWeather)
}