import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getStartLocationWithPermission } from '../helpers/helpers.geoLocation';
import { useDispatch, useSelector } from 'react-redux';

import { setWeather } from '../Redux/actions';
import Hourly from '../components/HourlyWeather/HourlyWeather';
import Daily from '../components/DailyWeather';
import CurrentWeather from '../components/CurrentWeather/CurrentWeather';
import { MEDIA_GATES } from '../constants';
import GlobalStyle from '../components/GlobalStyle';
import { type } from 'os';
import { backgroundFromAPI } from '../helpers/helpers.extractAPI';
import { RootState } from '../Redux/Store';
import Loading from '../components/Loading';

export interface Location {
  status: number,
  lat?: number,
  lon?: number,
}

export type BackgroundState = "Clear" | "Thunderstorm" | "Drizzle" | "Rain" | "Snow" | "Clouds" | null

interface StyledProps {
  background : BackgroundState,
}

function App() {
  const dispatch = useDispatch();
  const [location, setLocation] = useState<Location | null>(null)
  const [background, setBackground] = useState<BackgroundState>("Clear");

  const info = useSelector((state : RootState) => state.weather);
  console.log('info', info)
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
            // setBackground("Thunderstorm")
            setBackground(backgroundFromAPI(res.current.weather[0].main))
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
  return (<>
      <GlobalStyle />
      { info.current 
        ? (
          <Wrapper background={background}>
            <CurrentWeather />
            <Hourly />
            <Daily />
            </Wrapper>
          )
        : 
        <Loading />
        }
  </>);
}

export default App;

const Wrapper = styled.div`
  /* setting the background-image */
  background-image: url("../assets/${(props : StyledProps) => props.background}.jpg");  
  background-repeat: repeat;
  background-size: cover;
  background-position: center;

  padding:10px;
  box-sizing: border-box;
  min-height: 100vh;

  height: fit-content;
  width: 100vw;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 2fr 1fr 2fr;
  grid-template-areas:
    "current"
    "hourly"
    "daily";
  padding: 10px;
  @media (min-width: ${MEDIA_GATES.tablet}px) {
    /* height: 100%; */
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      "current hourly"
      "daily daily";
    padding: 10px;
  }
`