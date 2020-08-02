import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { DailyInstance } from '../../../types';
import { MEDIA_GATES } from '../../../constants';

interface props {
  style?: React.CSSProperties,
  current: DailyInstance,
};

const OneDay : React.FC<PropsWithChildren<props>> = ({current}) => {
  return (
    <Wrapper data-css='OneDay'>
      <Date>
        {current.day}, <span>{current.date}</span>
      </Date>
      <Content>
        <Sun>
        <span role='img' aria-label='sunrise'>↗️</span>: {current.sunrise}, <span role='img' aria-label='sunset'>↘️</span>:  {current.sunset}
        </Sun>
        <Temp>
          min: {current.temp.min}°c
          <br />
          <br />
          max: {current.temp.max}°c
        </Temp>
        <Weather>
          {current.weather?.map((instance, index) => <WeatherInstance key={index}>
            <img src={`https://openweathermap.org/img/wn/${instance.icon}.png`} alt='weather=icon'/>
          </WeatherInstance>)}
        </Weather> 
        <Temp>
          <p>morning:</p>  {current.temp.morn}°c <span> ~{current.feels_like.morn}°c</span>
        </Temp>
        <Temp>
          <p>day:</p>  {current.temp.day}°c <span> ~{current.feels_like.day}°c</span>
        </Temp>
        <Temp>
          <p>evening:</p> {current.temp.eve}°c <span> ~{current.feels_like.eve}°c</span> 
        </Temp>
        <Temp>
          <p>night:</p> {current.temp.night}°c <span> ~{current.feels_like.night}°c</span> 
        </Temp>
        <Humidity>
        <span role='img' aria-label='humidity'>💦</span> {current.humidity}%
        </Humidity>
      </Content>
    </Wrapper>
  )
}

export default OneDay;

const Wrapper = styled.div`
  box-sizing: border-box;
  @media (min-width: ${MEDIA_GATES.tablet}px) {
    width: 13%;
    height: 95%;
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
  @media (min-width: ${MEDIA_GATES.tablet}px) {
    width: 100%;
    height: 95%;
  }
  @media (min-width: ${MEDIA_GATES.desktop}px) {
    width: 100%;
    height: 95%;
  }
`;

const Sun = styled.div`
  font-size: 10px;
  margin: 4px 0;
  display: none;
  @media (min-width: ${MEDIA_GATES.tablet}px) {
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
    font-size: 16px;
    padding: 0;
    margin: 0;
    margin-bottom: 4px;
    text-decoration: underline;
  }
  span {
    font-size: 10px;
  }
`;

const Humidity = styled.div`
  font-size: 10px;
  text-align: center;
  margin-top: 5px;
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