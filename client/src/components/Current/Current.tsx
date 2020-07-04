import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

interface props {
  style?: React.CSSProperties,
  
};

const Current : React.FC<PropsWithChildren<props>> = () => {

  return (
    <Wrapper data-css='Current'>
      Current
    </Wrapper>
  )
}

export default Current;

const Wrapper = styled.div`

`;