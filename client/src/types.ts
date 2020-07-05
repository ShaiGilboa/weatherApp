export interface WeatherState {
  status: string,
  current: Current | null,
  hourly: Hourly | null,
  daily: Daily | null,
}

interface Rain_Snow {
  
}

interface Weather {
  id: number,
  main: string,
  description: string,
  icon: string,
}

export interface Current {
  time: number,
  sunrise: number,
  sunset: number,
  temp: number | DailyTemp,
  feels_like: number | DailyFeelsLike,
  humidity: number,
  wind_speed: number,
  rain?: any,
  weather: Weather[],
}

export type Hourly = Current[]

export interface DailyFeelsLike {
  day: number,
  eve: number,
  morn: number,
  night: number,
}

export interface DailyTemp extends DailyFeelsLike{
  max: number,
  min: number,
}

export type Daily = Current[]

export interface ReduxAction {
  type : string,
  [key : string] : any,
}

export interface APICurrent {
  [key : string] : any,
}
export interface APIDaily {
  [key : string] : any,
}
export interface APIHourly {
  [key : string] : any,
}

export interface APIData {
  current: APICurrent,
  daily: APIDaily,
  hourly: APIHourly,
  lat: number,
  lon: number,
  timezone: string,
  timezone_offset: number,
}