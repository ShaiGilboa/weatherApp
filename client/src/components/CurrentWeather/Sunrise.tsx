import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import sunriseGif from '../../assets/sunrise-transparent-sun-rise-5-original.gif';

interface props {
  style?: React.CSSProperties,
  time: String
};

const Sunrise : React.FC<PropsWithChildren<props>> = ({time}) => {

  return (
    <Wrapper data-css='Sunrise'>
        <GifBoxSunrise>
            <img src={sunriseGif} alt='sunrise'/>
          </GifBoxSunrise>
          <div style={{marginTop:'3px'}}>
            {time}
          </div>
    </Wrapper>
  )
}

export default Sunrise;

const Wrapper = styled.div`
  width: fit-content;
  height: fit-content;
`;

const GifBoxSunrise = styled.div`
  width: 20px;
  height: 20px;
  margin: 0 auto;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`