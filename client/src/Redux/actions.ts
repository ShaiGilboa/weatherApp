import { ReduxAction } from './reducers/types';
export const setWeather = (data : any) : ReduxAction => ({
  type: 'SET_CURRENT',
  data
})