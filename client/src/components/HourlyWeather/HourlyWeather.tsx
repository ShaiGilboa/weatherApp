import React, { PropsWithChildren, useEffect } from 'react';
import styled from 'styled-components';
import { Hourly, WeatherState, HourlyInstance } from '../../types';
import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/Store';
import OneHour from './OneHour';
import { MEDIA_GATES } from '../../constants';

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
      <h2>Hourly</h2>
      <Container>
        {hourlyWeather?.map((anHour :HourlyInstance, index : number) => <OneHour key={`${index}${anHour.unixTime}`} current={anHour} />)}
      </Container>
    </Wrapper>
  )
}

export default HourlyWeather;

const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  padding: 10px;

  grid-area: hourly;
  box-sizing: border-box;
  width: 100%;
  h2{
    margin: 3px 0;
  }
  @media (min-width: ${MEDIA_GATES.tablet}px) {
    width: 50vw;
    margin: auto 10px;
  }
  @media (min-width: ${MEDIA_GATES.desktop}px) {
  }
`;

const Container = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
  display: flex;
  @media (min-width: ${MEDIA_GATES.tablet}px) {
    height: 23vh;
    position: relative;
    bottom: 0;
  }
  @media (min-width: ${MEDIA_GATES.desktop}px) {
  }
`;