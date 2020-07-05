import React, { PropsWithChildren, useEffect } from 'react';
import styled from 'styled-components';
import { Daily, WeatherState } from '../../types';
import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/Store';

interface props {
  style?: React.CSSProperties,
  
};

const DailyWeather : React.FC<PropsWithChildren<props>> = () => {
  const dailyWeather : Daily | null = useSelector((state : RootState) => state.weather.daily)
  useEffect(()=>{
    console.log('DailyWeather', dailyWeather)
  },[dailyWeather])
  return (
    <Wrapper data-css='DailyWeather'>
      Daily
    </Wrapper>
  )
}

export default DailyWeather;

const Wrapper = styled.div`

`;