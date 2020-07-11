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
  grid-area: hourly;
  box-sizing: border-box;
  /* margin: 10px 0; */
  h2{
    width: fit-content;
    margin: 3px 0;
    /* margin-top: 50%; */
  }
  @media (min-width: ${MEDIA_GATES.tablet}) {
    width: 50vw;
    /* height: 100%; */
    margin: auto 0;
  }
  @media (min-width: ${MEDIA_GATES.desktop}) {
    height: fit-content;
    margin: auto 0;
    h2{
      margin-top: 0%;
    }
  }
`;

const Container = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
  display: flex;
  /* width: 100%; */
  /* height: 100%; */
  @media (min-width: ${MEDIA_GATES.tablet}) {
    height: 100%;
  }
  @media (min-width: ${MEDIA_GATES.desktop}) {
    height: 23vh;
    position: relative;
    bottom: 0;
  }
`;