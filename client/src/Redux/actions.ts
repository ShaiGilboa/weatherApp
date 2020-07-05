import { ReduxAction, APIData } from '../types';
export const setWeather = (data : APIData) : ReduxAction => ({
  type: 'SET_FORECAST',
  data
})