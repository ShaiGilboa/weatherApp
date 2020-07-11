import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { DailyInstance } from '../../../types';
import { MEDIA_GATES } from '../../../constants';

interface props {
  style?: React.CSSProperties,
  current: DailyInstance,
};

const OneDay : React.FC<PropsWithChildren<props>> = ({current}) => {
  console.log('current', current.feels_like)
  return (
    <Wrapper data-css='OneDay'>
      <Date>
        {current.day}, <span>{current.date}</span>
      </Date>
      <Content>
        <Sun>
          ↗️: {current.sunrise}, ↘️:  {current.sunset}
        </Sun>
        <Temp>
          <p>min: {current.temp.min}°c</p>
          <p>max: {current.temp.max}°c</p>
        </Temp>
        <Weather>
          {current.weather?.map((instance, index) => <WeatherInstance key={index}>
            <img src={`http://openweathermap.org/img/wn/${instance.icon}.png`} />
          </WeatherInstance>)}
        </Weather> 
        <Temp>
          morning: {current.temp.morn}°c <p>{current.feels_like.morn}°c</p>
        </Temp>
        <Temp>
          day: {current.temp.day}°c <p>{current.feels_like.day}°c</p>
        </Temp>
        <Temp>
          evening: {current.temp.eve}°c <p>{current.feels_like.eve}°c</p>
        </Temp>
        <Temp>
          night: {current.temp.night}°c <p>{current.feels_like.night}°c</p>
        </Temp>
        <Humidity>
        💦 {current.humidity}%
        </Humidity>
      </Content>
    </Wrapper>
  )
}

export default OneDay;

const Wrapper = styled.div`
  box-sizing: border-box;
  @media (min-width: ${MEDIA_GATES.tablet}) {
    width: 13%;
    height: 95%;
    /* margin: auto 0; */
  }
`;

const Date = styled.div`
  white-space: nowrap;
  height: 20px;
  font-size: 20px;
  position: relative;
  width: fit-content;
  padding: 0 5px;
  text-align:center;
  margin: 0 auto;
  span{
    font-size: 15px;
  }
`;

const Content = styled.div`
  border-top: 1px solid grey;
  width: 100px;
  display: flex;
  height: fit-content;
  flex-direction: column;
  justify-content: space-around;
  @media (min-width: ${MEDIA_GATES.tablet}) {
    width: 100%;
    height: 95%;
    /* margin: 0 auto; */
  }
  @media (min-width: ${MEDIA_GATES.desktop}) {
    width: 100%;
    height: 95%;
    /* margin: auto 0; */
  }
`;

const Sun = styled.div`
  font-size: 10px;
  display: none;
  @media (min-width: ${MEDIA_GATES.tablet}) {
    display: block;
    text-align: center;
  }
`;

const Temp = styled.div`
  font-size: 13px;
  padding:5px;
  text-align: center;
  text-transform: capitalize;
  p{
    font-size: 10px;
    margin-top: 0;
  }
`;

const Humidity = styled.div`
  font-size: 10px;
  text-align: center;
`;

const Weather = styled.div`
  display: flex;
  justify-content: space-around;
`;

const WeatherInstance = styled.div`
  display: flex;
  flex-direction: column;
  img{
    width: 40px;
    height: 40px;
  }
`;