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
  timeZone: null,
};


const appReducer = (state: WeatherState = initialState, action: ReduxAction) : WeatherState=> {
  switch (action.type) {
    case 'SET_FORECAST':
      return produce(state, draftState => {
        draftState.current = extractCurrent(action.data.current);
        draftState.hourly = extractHourly(action.data);
        draftState.daily = extractDaily(action.data);
        draftState.timeZone = action.data.timezone;
      });
    default:
      return state;
  }
}

export default appReducer;