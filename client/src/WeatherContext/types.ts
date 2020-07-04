export interface State {
  status: string,
  current: Current | null,
  hourly: Hourly | null,
  daily: Daily | null,
}

export interface Current {
  [key : string] : any,
}

export interface Hourly {
  [key : string] : any,
}

export interface Daily {
  [key : string] : any,
}

export interface Action {
  type: string,
  data? : any,  
}