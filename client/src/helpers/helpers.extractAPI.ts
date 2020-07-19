import { APIData, Current, Hourly, APICurrent, Daily, HourlyInstance, DailyInstance } from '../types';
import * as DateFns from 'date-fns';

export const extractCurrent = (oneCurrent : APICurrent) => {
  const current : Current = {
    unixTime: oneCurrent.dt,
    time: DateFns.format(DateFns.fromUnixTime(oneCurrent.dt), "HH:mm"),
    unixSunrise: oneCurrent.sunrise,
    sunrise: DateFns.format(DateFns.fromUnixTime(oneCurrent.sunrise), "HH:mm"),
    unixSunset: oneCurrent.sunset,
    sunset: DateFns.format(DateFns.fromUnixTime(oneCurrent.sunset), "HH:mm"),
    temp: Math.round(oneCurrent.temp),
    feels_like: Math.round(oneCurrent.feels_like),
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
    day: DateFns.format(DateFns.fromUnixTime(oneCurrent.dt), "EEEEEE"),
    date: DateFns.format(DateFns.fromUnixTime(oneCurrent.dt), "d LLL"),
    temp: Math.round(oneCurrent.temp),
    feels_like: Math.round(oneCurrent.feels_like),
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

const extractDailyInstance = (oneCurrent : APICurrent) => {
  const current : DailyInstance = {
    unixTime: oneCurrent.dt,
    time: DateFns.format(DateFns.fromUnixTime(oneCurrent.dt), "HH:mm"),
    day: DateFns.format(DateFns.fromUnixTime(oneCurrent.dt), "EEEEEE"),
    date: DateFns.format(DateFns.fromUnixTime(oneCurrent.dt), "d LLL"),
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
  current.temp.day = Math.round(current.temp.day);
  current.temp.morn = Math.round(current.temp.morn);
  current.temp.eve = Math.round(current.temp.eve);
  current.temp.max = Math.round(current.temp.max);
  current.temp.min = Math.round(current.temp.min);
  current.temp.night = Math.round(current.temp.night);
  current.feels_like.day = Math.round(current.feels_like.day);
  current.feels_like.morn = Math.round(current.feels_like.morn);
  current.feels_like.eve = Math.round(current.feels_like.eve);
  current.feels_like.night = Math.round(current.feels_like.night);
  return current;
}


export const extractDaily = (data : APIData) => {
  const daily : Daily = data.daily.map((oneDay : APICurrent) => extractDailyInstance(oneDay))
  return daily;
}

export const backgroundFromAPI = (main : string) => {
  if(main === "Clear" || main === "Thunderstorm" || main === "Drizzle" || main === "Rain" || main === "Snow" || main === "Clouds") return main
  return "Clear"
}