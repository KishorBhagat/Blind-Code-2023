import React from 'react'
import styled from 'styled-components';

const StyledThanks = styled.div`
  .background{
    position: relative;
    background-color: black;
    height: 100vh;
    /* filter: blur(8px); */
    opacity: 0.3;
  }
  .thanksBox{
    border-radius: 5px;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    height: 260px;
    width: 520px;
    /* width: fit-content; */
    padding: 50px;
    top: calc(50% - 130px);
    left: calc(50% - 260px);
    background-color: white;
    /* color: var(--enigma-green); */
    /* color: green; */
    filter:drop-shadow(5px 5px 10px black);
    
    p{
      font-size: 50px;
      color: #28a745;
    }
    h4{
      font-weight: 400;
      color: #545454;
    }
  }
`;

const Thanks = () => {
  return (
    <StyledThanks className='thanks'>
      <div className='background'></div>
      <div className='thanksBox'>
        <p>Thank You!</p>
        <h4>Your response is submitted.</h4>
      </div>
    </StyledThanks>
  )
}

export default Thanks