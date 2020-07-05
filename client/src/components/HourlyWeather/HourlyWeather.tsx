import React, { PropsWithChildren, useEffect } from 'react';
import styled from 'styled-components';
import { Hourly, WeatherState } from '../../types';
import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/Store';

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
    </Wrapper>
  )
}

export default HourlyWeather;

const Wrapper = styled.div`

`;