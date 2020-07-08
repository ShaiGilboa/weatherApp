import React, { PropsWithChildren, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Current, WeatherState } from '../../types';
import { RootState } from '../../Redux/Store';
import * as format from 'date-fns';
import sunriseGif from '../../assets/sunrise-transparent-sun-rise-5-original.gif';
import Sunrise from './Sunrise';
import Sunset from './Sunset';

interface props {
  style?: React.CSSProperties,
  
};

const CurrentWeather : React.FC<PropsWithChildren<props>> = () => {
  const currentWeather : Current | null = useSelector((state : RootState) => state.weather.current)
  let formattedTime : any;
  useEffect(()=>{
    if(currentWeather && currentWeather.time){
      console.log('currentWeather', currentWeather)
    }
  },[currentWeather])
  return (
    <Wrapper data-css='CurrentWeather'>
      {currentWeather ? (
      <>
      <Topbar>
        <Sunrise time={currentWeather.sunrise} />
        <Time>
          <div>last update:</div>
          {currentWeather.time}
        </Time>
        <Sunset time={currentWeather.sunset}/>
      </Topbar>
        <Temp>
          {currentWeather.temp}°c <p>feels like: {currentWeather.feels_like}°c</p>
        </Temp>
        <Weather>
          {currentWeather.weather?.map((instance, index) => <WeatherInstance key={index}>
            <p>{instance.main}</p>
            <img src={`http://openweathermap.org/img/wn/${instance.icon}.png`} />
          </WeatherInstance>)}
        </Weather>  
        <Humidity>
        💦 {currentWeather.humidity}%
        </Humidity>
      </>
      ) : (
        <div>loading current</div>
      )}
    </Wrapper>
  )
}

export default CurrentWeather;

const Wrapper = styled.div`
  width: 100%;
`;

const Topbar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
`

const Time = styled.div`
  /* background: transparent; */
  width: fit-content;
  text-align: center;
`;

const Temp = styled.div`
  width: fit-content;
  position: relative;
  text-align: center;
  margin: 5px auto;
  font-size: 40px;
  p{
    margin: 2px 0;
    font-size: 15px;
  }
`;

const Weather = styled.div`
  display: flex;
  justify-content: space-around;
`;

const WeatherInstance = styled.div`
  display: flex;
  flex-direction: column;
  p{
    margin: 0;
  }
  img{
    width: 50px;
  }
`;

const Humidity = styled.div`
  width: fit-content;
  font-size: 12px;
  margin: 0 auto;
`;