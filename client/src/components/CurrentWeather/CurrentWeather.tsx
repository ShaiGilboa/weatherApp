import React, { PropsWithChildren, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Current, WeatherState } from '../../types';
import { RootState } from '../../Redux/Store';
import * as format from 'date-fns';

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
      <p>
        sunrise: {currentWeather.sunrise}
      </p>
        <Time>
          {currentWeather.time}
        </Time>
        <p>
          sunset:  {currentWeather.sunset}
        </p>
        <Temp>
          {currentWeather.temp}°c <p>feels like: {currentWeather.feels_like}°c</p>
        </Temp>
        <Humidity>
          {currentWeather.humidity}%
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

const Time = styled.div`
  /* background: transparent; */
  width: fit-content;
  
`;

const Temp = styled.div`
  width: fit-content;
  position: relative;
  margin: 5px auto;
  font-size: 20px;
  p{
    margin: 2px 0;
    font-size: 15px;
  }
`;

const Humidity = styled.div`
  width: fit-content;

`;