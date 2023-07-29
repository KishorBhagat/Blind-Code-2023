import React from 'react';
import styled from 'styled-components';

const StyledNotSupportedMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: #000000;
  color: #D7D7D7;
  padding: 0 20px;

`

const NotSupportedMessage = () => {
  return (
    <StyledNotSupportedMessage>
      <h1>Not Supported in this device.</h1>
      <p>Please visit this site on a desktop or a larger screen device.</p>
    </StyledNotSupportedMessage>
  );
};

export default NotSupportedMessage;