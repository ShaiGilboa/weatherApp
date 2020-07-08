import React, { PropsWithChildren, useEffect } from 'react';
import styled from 'styled-components';
import { Daily, WeatherState, Current, DailyInstance } from '../../types';
import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/Store';
import OneDay from './OneDay/OneDay';

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
      {dailyWeather?.map((aDay : DailyInstance, index : number) => <OneDay key={`${index}${aDay.unixSunrise}`} current={aDay} /> )}
    </Wrapper>
  )
}

export default DailyWeather;

const Wrapper = styled.div`
  overflow: auto;
  /* width: 100%; */
  display: flex;
  margin: 10px;
`;