import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { DailyInstance } from '../../../types';

interface props {
  style?: React.CSSProperties,
  current: DailyInstance,
};

const OneDay : React.FC<PropsWithChildren<props>> = ({current}) => {
  console.log('current', current.feels_like)
  return (
    <Wrapper data-css='OneDay'>
      <p>
        sunrise: {current.sunrise}
      </p>
        <Date>
          {current.day}, {current.date}
        </Date>
        <p>
          sunset:  {current.sunset}
        </p>
        <Temp>
          <p>morning: {current.temp.morn}°c</p>
          <p>day: {current.temp.day}°c</p>
          <p>evening: {current.temp.eve}°c</p>
          <p>night: {current.temp.night}°c</p>
          <p>min: {current.temp.min}°c</p>
          <p>max: {current.temp.max}°c</p>
          <p>feels like morning: {current.feels_like.morn}</p>
          <p>feels like day: {current.feels_like.day}</p>
          <p>feels like evening: {current.feels_like.eve}</p>
          <p>feels like night: {current.feels_like.night}</p>
        </Temp>
        <Humidity>
          {current.humidity}%
        </Humidity>
    </Wrapper>
  )
}

export default OneDay;

const Wrapper = styled.div`

`;

const Date = styled.div`
  /* background: transparent; */
  width: fit-content;
`;

const Temp = styled.div`
  width: fit-content;

`;

const Humidity = styled.div`
  width: fit-content;

`;