import React, { PropsWithChildren, useEffect } from 'react';
import styled from 'styled-components';
import { Hourly, WeatherState, HourlyInstance } from '../../types';
import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/Store';
import OneHour from './OneHour';

interface props {
  style?: React.CSSProperties,
  
};

const HourlyWeather : React.FC<PropsWithChildren<props>> = () => {
  const hourlyWeather : Hourly | null = useSelector((state : RootState) => state.weather.hourly)
  useEffect(()=>{
    console.log('hourlyWeather', hourlyWeather)
  },[hourlyWeather])
  return (
    <Wrapper data-css='HourlyWeather'>
      Hourly
      {hourlyWeather?.map((anHour :HourlyInstance, index : number) => <OneHour key={`${index}${anHour.unixTime}`} current={anHour} />)}
    </Wrapper>
  )
}

export default HourlyWeather;

const Wrapper = styled.div`
  overflow: auto;
  width: 100%;
  display: flex;
`;