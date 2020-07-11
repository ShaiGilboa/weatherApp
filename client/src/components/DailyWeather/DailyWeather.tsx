import React, { PropsWithChildren, useEffect } from 'react';
import styled from 'styled-components';
import { Daily, WeatherState, Current, DailyInstance } from '../../types';
import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/Store';
import OneDay from './OneDay/OneDay';
import { MEDIA_GATES } from '../../constants';

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
      <h2>Daily</h2>
      <Container>
        {dailyWeather?.map((aDay : DailyInstance, index : number) => <OneDay key={`${index}${aDay.unixSunrise}`} current={aDay} /> )}
      </Container>
    </Wrapper>
  )
}

export default DailyWeather;

const Wrapper = styled.div`
  grid-area: daily;
  /* display: flex; */
  box-sizing: border-box;
  /* width: 100%; */
  /* margin: 10px; */
  h2 {
    margin: 3px 0;
    width: fit-content;
  }
  @media (min-width: ${MEDIA_GATES.tablet}) {
    /* margin: auto 0; */
    /* box-sizing: border-box; */
    width: 100%;
    /* height: 100%; */
    /* padding: 30px; */
    /* margin-right: 10px; */
  }
`;

const Container = styled.div`
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  height: 100%;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  /* width: 100%; */
  @media (min-width: ${MEDIA_GATES.tablet}) {
    /* margin: 0 auto; */
    margin: 0 auto;
    height: 95%;
  }
  @media (min-width: ${MEDIA_GATES.desktop}) {
    margin: 0 auto;
    height: 95%;
  }
`;