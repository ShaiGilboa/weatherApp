import React, { PropsWithChildren, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Hourly, HourlyInstance } from '../../types';
import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/Store';
import OneHour from './OneHour';
import { MEDIA_GATES } from '../../constants';

interface props {
  style?: React.CSSProperties,
  
};

export function useInterval(callback : any, delay : number) {
  const savedCallback = React.useRef<any>();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}


const HourlyWeather : React.FC<PropsWithChildren<props>> = () => {
  const hoursContainerRef = useRef<HTMLDivElement>(null);
  const hourlyWeather : Hourly | null = useSelector((state : RootState) => state.weather.hourly)

  const scroll = (direction : string) => {
    if(hoursContainerRef && hoursContainerRef.current){
      if(direction === 'back'){
        hoursContainerRef.current.scrollLeft -=70;
      } else {
        hoursContainerRef.current.scrollLeft +=70;
      }
    }
  }

  return (
    <Wrapper data-css='HourlyWeather'>
      <h2>Hourly</h2>
      <Container ref={hoursContainerRef}>
        {hourlyWeather?.map((anHour :HourlyInstance, index : number) => <OneHour key={`${index}${anHour.unixTime}`} current={anHour} />)}
      </Container>
      <Buttons>
        <Back
          onClick={()=>scroll('back')}
        >{"<"}</Back>
        <Forward
          onClick={()=>scroll('forward')}
        >{">"}</Forward>
      </Buttons>
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
  scroll-snap-type: both mandatory;
  @media (min-width: ${MEDIA_GATES.tablet}px) {
    height: fit-content;
    position: relative;
    bottom: 0;
  }
  @media (min-width: ${MEDIA_GATES.desktop}px) {
  }
`;

const Buttons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top:3px;
  display: none;
  @media (min-width: ${MEDIA_GATES.desktop}px) {
  display: flex;
  }
`;

const Back = styled.button`
  padding: 0;
  border: 0;
  margin: 0;
  background: transparent;
  color: #d3d3d3;
  font-weight: 800;
  width: 50px;
`;

const Forward = styled.button`
  padding: 0;
  border: 0;
  margin: 0;
  background: transparent;
  color: #d3d3d3;
  font-weight: 800;
  width: 50px;
`;