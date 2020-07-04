export const y=9;
// import React, { useContext, createContext, useReducer, PropsWithChildren } from "react";
// import { State, Action } from './types';

// const initialState : State = {
//   status: 'loading', /* - loading
//                         - error
//                         - idle
//                       */
//   current: null,
//   hourly: null,
//   daily: null,
// };

// const test = createContext<State | null>(null);

// const reducer = (state : State, action : Action) =>{
//   switch (action.type) {
//     case 'SET_CURRENT_USER':
//       return {
//         ...state,
//         // status: 'idle',
//         // currentUserProfile: action.profile,
//       }
//     default:
//       throw new Error(`error: unknown action: ${action}`);
//   }
// }

// interface props {
//   style?: React.CSSProperties,
  
// };

// export const WeatherProvider :  = ({children}) => {
//   const [currentState, dispatch] = useReducer(reducer, initialState);

//   // const Function () return({type, data})

//   return (
//     <WeatherContext.provider >
//       {children}
//     </WeatherContext>
//   )
// }
