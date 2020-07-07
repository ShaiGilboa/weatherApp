import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { HourlyInstance } from '../../../types';

interface props {
  style?: React.CSSProperties,
  current: HourlyInstance,
};

const OneHour : React.FC<PropsWithChildren<props>> = ({current}) => {

  return (
    <Wrapper data-css='OneHour'>
      OneHour
      <Time>
          {current.time}
      </Time>
      <Temp>
          {current.temp}°c <p>feels like: {current.feels_like}</p>
        </Temp>
        <Humidity>
          {current.humidity}%
        </Humidity>
    </Wrapper>
  )
}

export default OneHour;

const Wrapper = styled.div`
  height: 200px;
  
`;

const Time = styled.div`
  /* background: transparent; */
  width: fit-content;
`;

const Temp = styled.div`
  width: fit-content;

`;

const Humidity = styled.div`
  width: fit-content;

`;