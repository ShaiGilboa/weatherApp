import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { Daily, DailyInstance } from '../../types';
import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/Store';
import OneDay from './OneDay/OneDay';
import { MEDIA_GATES } from '../../constants';

interface props {
  style?: React.CSSProperties,
  
};

const DailyWeather : React.FC<PropsWithChildren<props>> = () => {
  const dailyWeather : Daily | null = useSelector((state : RootState) => state.weather.daily)

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

  background-color: rgba(0, 0, 0, 0.4);
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  padding: 10px;

  margin: auto 0 ;
  box-sizing: border-box;
  h2 {
    margin: 3px 0;
    width: fit-content;
  }
  @media (min-width: ${MEDIA_GATES.tablet}px) {
    width: 100%;
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
  @media (min-width: ${MEDIA_GATES.tablet}px) {
    margin: 0 auto;
    height: 95%;
  }
  @media (min-width: ${MEDIA_GATES.desktop}px) {
    margin: 0 auto;
    height: 95%;
  }
`;