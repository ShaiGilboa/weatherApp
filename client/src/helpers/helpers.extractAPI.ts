import { APIData, Current, Hourly, APICurrent, Daily } from '../types';

export const extractCurrent = (oneCurrent : APICurrent) => {
  const current : Current = {
    time: oneCurrent.dt,
    sunrise: oneCurrent.sunrise,
    sunset: oneCurrent.sunset,
    temp: oneCurrent.temp,
    feels_like: oneCurrent.feels_like,
    humidity: oneCurrent.humidity,
    wind_speed: oneCurrent.wind_speed,
    rain: oneCurrent.rain,
    weather: oneCurrent.weather,
  }
  return current;
}

export const extractHourly = (data : APIData) => {
  const hourly : Hourly = data.hourly.map((oneHour : APICurrent) => extractCurrent(oneHour))
  return hourly;
}

export const extractDaily = (data : APIData) => {
  const daily : Daily = data.daily.map((oneDay : APICurrent) => extractCurrent(oneDay))
  return daily;
}