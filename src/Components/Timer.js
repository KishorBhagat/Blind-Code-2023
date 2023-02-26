import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

const StyledTimer = styled.span`
  /* span{
    display: flex;
    width: fit-content;
    background-color: red;
    padding: 5px 10px;
    border-radius: 5px;
    color: white;
  } */
`;

const Timer = ({minutes, setTimeover, pageSwitched}) => {

  const [mins, setMins] = useState(minutes);
  const [secs, setSecs] = useState(0);

  useEffect(() => {
    if(pageSwitched){
      setMins(0);
      setSecs(0);
    }
    if(secs>=0){
      setTimeout(() => {
        setSecs(secs - 1);
      }, 1000);      
    }
    else {
      setSecs(59);
      if(mins>0){
        setMins(mins - 1);
      }
      else {
        setSecs(0);
      }
    }

    if(secs===0 && mins===0){
      return setTimeover(true);
    }
    
  }, [secs, pageSwitched]);
  
  // if(secs===0 && mins===0){
  //   // localStorage.clear();
  //   // console.log("Time over");
  // }

  return (
    <StyledTimer>
      Time remaining - <span>{ (mins<10)? '0'+mins : mins } : { (secs<10) ? '0'+secs : secs}</span> mins
    </StyledTimer>
  )
}

export default Timer