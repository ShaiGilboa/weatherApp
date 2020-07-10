import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getStartLocationWithPermission } from '../helpers/helpers.geoLocation';
import { useDispatch } from 'react-redux';

import { setWeather } from '../Redux/actions';
import Hourly from '../components/HourlyWeather/HourlyWeather';
import Daily from '../components/DailyWeather';
import CurrentWeather from '../components/CurrentWeather/CurrentWeather';
import { MEDIA_GATES } from '../constants';

export interface Location {
  status: number,
  lat?: number,
  lon?: number,
}



function App() {
  const dispatch = useDispatch();
  const [location, setLocation] = useState<Location | null>(null)
  useEffect(()=>{
    getStartLocationWithPermission(setLocation)
  },[])
  
  useEffect(()=>{
    if(location) {
      if(location.status === 200) {
        console.log('we have location!')
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${location.lat}&lon=${location.lon}&units=metric&exclude={minutely}&appid=${process.env.REACT_APP_API_KEY}`)
          .then(res => res.json())
          .then(res =>{
            console.log('res', res.daily[0].weather)
            dispatch(setWeather(res))
          })
          .catch(err => console.log('err in initial fetch', err))
      } else if(location.status === 401) {
        console.log('access to location blocked')
      }
    } else {
      console.log('waiting for user to respond to location request')
    }
  },[location])
  return (
    <Wrapper>
      <CurrentWeather />
      <Hourly />
      <Daily />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  @media (min-width: ${MEDIA_GATES.tablet}) {
    height: 100vh;
  }
`