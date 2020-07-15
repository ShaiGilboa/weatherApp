import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { HourlyInstance } from '../../../types';
import { MEDIA_GATES } from '../../../constants';

interface props {
  style?: React.CSSProperties,
  current: HourlyInstance,
};

const OneHour : React.FC<PropsWithChildren<props>> = ({current}) => {

  return (
    <Wrapper data-css='OneHour'>
      <TopGap>
        {current.time === '01:00' && <DayChange>{current.day}, <span>{current.date}</span></DayChange>}
      </TopGap>
      <Time>
          {current.time}
      </Time>
      <Temp>
          {current.temp}°c <p>{current.feels_like}°c</p>
      </Temp>
      <Weather>
        {current.weather?.map((instance, index) => <WeatherInstance key={index}>
          <img src={`http://openweathermap.org/img/wn/${instance.icon}.png`} />
        </WeatherInstance>)}
      </Weather> 
      <Humidity>
      💦 {current.humidity}%
      </Humidity>
    </Wrapper>
  )
}

export default OneHour;

const Wrapper = styled.div`
  height: fit-content;
  min-width: 71px;
  max-width: 71px;
  display: flex;
  flex-direction: column;
  text-align:center;
  justify-content:center;
  justify-content:space-around;

  scroll-snap-align: start;
  div{
    justify-content:center;
    text-align:center;
    justify-items: center;
    align-items: center;
  }
  @media (min-width: ${MEDIA_GATES.tablet}) {
    height: 100%;
  }
`;

const TopGap = styled.div`
  white-space: nowrap;
  height: 20px;
  border-bottom: 1px solid grey;
`;

const DayChange = styled.div`
  font-size: 20px;
  position: relative;
  width: fit-content;
  text-align:center;
  margin: 0 auto;
  span{
    font-size: 15px;
  }
`

const Time = styled.div`
  font-size: 20px;
  width: fit-content;
  padding: 5px;
  margin: 0 auto;
`;

const Temp = styled.div`
  font-size: 20px;
  padding-top:5px;
  p{
    font-size: 10px;
    margin-top: 0;
  }
`;

const Weather = styled.div`
  display: flex;
  justify-content: space-around;
`;

const WeatherInstance = styled.div`
  display: flex;
  flex-direction: column;
  img{
    width: 30px;
    height: 30px;
  }
`;

const Humidity = styled.div`
  font-size: 10px;
`;