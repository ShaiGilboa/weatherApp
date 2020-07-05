import produce from 'immer';
import { WeatherState, ReduxAction } from '../../types';
import { extractCurrent, extractDaily, extractHourly } from '../../helpers/helpers.extractAPI';

const initialState : WeatherState = {
  status: 'loading', /* - loading
                        - error
                        - idle
                      */
  current: null,
  hourly: null,
  daily: null,
};


const appReducer = (state: WeatherState = initialState, action: ReduxAction) : WeatherState=> {
  switch (action.type) {
    case 'SET_FORECAST':
      console.log('action', action)
      return produce(state, draftState => {
        draftState.current = extractCurrent(action.data.current);
        draftState.hourly = extractHourly(action.data);
        draftState.daily = extractDaily(action.data);
      });
    default:
      return state;
  }
}

export default appReducer;