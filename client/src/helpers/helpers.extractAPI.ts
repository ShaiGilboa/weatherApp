import { APIData, Current, Hourly, APICurrent, Daily, HourlyInstance } from '../types';
import * as DateFns from 'date-fns';

export const extractCurrent = (oneCurrent : APICurrent) => {
  const current : Current = {
    unixTime: oneCurrent.dt,
    time: DateFns.format(DateFns.fromUnixTime(oneCurrent.dt), "HH:mm"),
    unixSunrise: oneCurrent.sunrise,
    sunrise: DateFns.format(DateFns.fromUnixTime(oneCurrent.sunrise), "HH:mm"),
    unixSunset: oneCurrent.sunset,
    sunset: DateFns.format(DateFns.fromUnixTime(oneCurrent.sunset), "HH:mm"),
    temp: oneCurrent.temp,
    feels_like: oneCurrent.feels_like,
    humidity: oneCurrent.humidity,
    wind_speed: oneCurrent.wind_speed,
    rain: oneCurrent.rain,
    weather: oneCurrent.weather,
  }
  return current;
}

const extractHourlyInstance = (oneCurrent : APICurrent) => {
  const current : HourlyInstance = {
    unixTime: oneCurrent.dt,
    time: DateFns.format(DateFns.fromUnixTime(oneCurrent.dt), "HH:mm"),
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
  const hourly : Hourly = data.hourly.map((oneHour : APICurrent) => extractHourlyInstance(oneHour))
  return hourly;
}

export const extractDaily = (data : APIData) => {
  const daily : Daily = data.daily.map((oneDay : APICurrent) => extractCurrent(oneDay))
  return daily;
}