import produce from 'immer';
import { WeatherState, ReduxAction } from '../../types';
import { extractCurrent, extractDaily, extractHourly } from '../../helpers/helpers.extractAPI';
import format from 'date-fns';

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
      console.log('action', action)
      return produce(state, draftState => {
        draftState.current = extractCurrent(action.data.current);
        // draftState.current.time = format.format(format.fromUnixTime(draftState.current.time), "HH:mm");
        draftState.hourly = extractHourly(action.data);
        draftState.daily = extractDaily(action.data);
        draftState.timeZone = action.data.timezone;
      });
    default:
      return state;
  }
}

export default appReducer;