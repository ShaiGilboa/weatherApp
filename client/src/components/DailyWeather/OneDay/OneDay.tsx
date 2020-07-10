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
      <Date>
        {current.day}, <span>{current.date}</span>
      </Date>
      <Content>
        <p>
          ↗️: {current.sunrise}, ↘️:  {current.sunset}
        </p>
        <Temp>
          <p>min: {current.temp.min}°c</p>
          <p>max: {current.temp.max}°c</p>
        </Temp>
        <Weather>
          {current.weather?.map((instance, index) => <WeatherInstance key={index}>
            <p>{instance.main}</p>
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
  p{
    font-size: 10px;
  }
`;

const Temp = styled.div`
  font-size: 20px;
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
  p{
    font-size: 15px;
    margin: 0;
    text-align: center;
  }
  img{
    width: 30px;
    height: 30px;
  }
`;