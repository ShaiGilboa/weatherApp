import React, { PropsWithChildren, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Current, WeatherState } from '../../types';
import { RootState } from '../../Redux/Store';

interface props {
  style?: React.CSSProperties,
  
};

const CurrentWeather : React.FC<PropsWithChildren<props>> = () => {
  const currentWeather : Current | null = useSelector((state : RootState) => state.weather.current)
  useEffect(()=>{
    console.log('currentWeather', currentWeather)
  },[currentWeather])
  return (
    <Wrapper data-css='CurrentWeather'>
      Current
    </Wrapper>
  )
}

export default CurrentWeather;

const Wrapper = styled.div`

`;