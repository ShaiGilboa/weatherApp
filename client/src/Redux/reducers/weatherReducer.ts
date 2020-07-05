import produce from 'immer';
import { WeatherState, ReduxAction } from './types';

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
    case 'SET_CURRENT':
      return produce(state, draftState => {
        draftState.current = action.data;
      });
    default:
      return state;
  }
}

export default appReducer;