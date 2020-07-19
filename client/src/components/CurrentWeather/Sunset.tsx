import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

interface props {
  style?: React.CSSProperties,
  time: string
};

const Sunset : React.FC<PropsWithChildren<props>> = ({time}) => {

  return (
    <Wrapper data-css='Sunset'>
      <GifBox>
        <iframe title='sunset' src="https://giphy.com/embed/3ov9jLYWb4zCjGfqIE" frameBorder="0" allowFullScreen></iframe>
      </GifBox>
      <div>
        {time}
      </div>
    </Wrapper>
  )
}

export default Sunset;

const Wrapper = styled.div`
  width: fit-content;
  text-align: center;
  div{
    margin: auto 0;
  }
`;

const GifBox = styled.div`
  width: 20px;
  height: 20px;
  overflow: hidden;
  align-content: center;
  align-items: center;
  display: inline-block;
  iframe {
    margin: 0 auto;
    width: 40px;
    height: 40px;
    position: relative;
    left: -10px;
    top: -10px;
  }
`;