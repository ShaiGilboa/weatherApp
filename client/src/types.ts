export interface WeatherState {
  status: string,
  current: Current | null,
  hourly: Hourly | null,
  daily: Daily | null,
  timeZone: string | number | null,
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
  unixTime: number,
  time: string,
  unixSunrise: number,
  sunrise: string,
  unixSunset: number,
  sunset: string,
  temp: number | DailyTemp,
  feels_like: number | DailyFeelsLike,
  humidity: number,
  wind_speed: number,
  rain?: any,
  weather: Weather[],
}

export interface DailyInstance {
  unixTime: number,
  time: string,
  unixSunrise: number,
  day: string,
  date: string,
  sunrise: string,
  unixSunset: number,
  sunset: string,
  temp: DailyTemp,
  feels_like: DailyFeelsLike,
  humidity: number,
  wind_speed: number,
  rain?: any,
  weather: Weather[],
}

export interface HourlyInstance {
  unixTime: number,
  day: string,
  date: string,
  time: string,
  temp: number,
  feels_like: number,
  humidity: number,
  wind_speed: number,
  rain?: any,
  weather: Weather[],
}

export type Hourly = HourlyInstance[]

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

export type Daily = DailyInstance[]

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