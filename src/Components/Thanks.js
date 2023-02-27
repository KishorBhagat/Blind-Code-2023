import React from 'react'
import styled from 'styled-components';

const StyledThanks = styled.div`
  .background{
    position: relative;
    background-color: white;
    height: 100vh;
    /* filter: blur(8px); */
    opacity: 0.15;
  }
  .thanksBox{
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    height: 260px;
    width: 500px;
    padding: 50px;
    top: calc(50% - 130px);
    left: calc(50% - 250px);
    background-color: white;
    /* color: #D7D7D7; */
    filter:drop-shadow(5px 5px 10px black);
    
  }
`;

const Thanks = () => {
  return (
    <StyledThanks className='thanks'>
      <div className='background'></div>
      <div className='thanksBox'>
        <p>Thanks for participating!</p>
      </div>
    </StyledThanks>
  )
}

export default Thanks