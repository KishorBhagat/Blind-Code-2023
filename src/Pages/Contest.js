import React from 'react'
import styled from 'styled-components';
import Editor from '../Components/Editor';

const StyledContest = styled.div`
  height: 100vh;
`;

const Contest = () => {
  return (
    <StyledContest>
      Contest Page
      <Editor/>
    </StyledContest>
  )
}

export default Contest