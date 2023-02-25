import React from 'react'
import styled from 'styled-components';

const StyledThanks = styled.div`
    height: 100vh;
`;

const Thanks = () => {
  return (
    <StyledThanks>
      <div>
        <p>Thanks for participating.</p>
      </div>
    </StyledThanks>
  )
}

export default Thanks