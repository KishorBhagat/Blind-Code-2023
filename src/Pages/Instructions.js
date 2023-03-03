import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import { QuestionContext } from '../Context/QuestionContext';

const StyledInstructions = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: black;

    /* color: white; */
    color: #D7D7D7;

    .logo{
      position: fixed;
      top: 10px;
      left: 100px;
      height: 100px;
      width: 100px;
    }
    .instructions{
      /* margin-bottom: 50px; */
      padding: 0 0 50px 0;
      width: 1000px;
      .heading{
        margin-bottom: 40px;
        /* color: #f37c1e; */
        color: var(--enigma-green);
        
        h1{
          font-weight: 600;
          text-align: center;
        }
      }
      .points{
        .point{
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin: 20px 0;
          font-weight: 300;
          span{
            font-size: 22px;
            /* color: #f37c1e; */
            color: var(--enigma-green);

          }
          p{
            font-size: 22px;
            text-align: justify;
          }
        }
      }
    }

    .next{
      position: absolute;
      bottom: 50px;
      right: calc(50% - 500px);
      cursor: pointer;
      background-color: transparent;
      /* color: #f37c1e; */
      color: var(--enigma-green);
      font-size: 30px;
      font-weight: 500;
      border: none;
      transition: 0.2s all;
      :hover{
        filter: drop-shadow(0 0 0.05rem var(--enigma-green));
      }
    }
`;

const Instructions = () => {

  const navigate = useNavigate();

  const handleNext = (e) => {
    e.preventDefault();
    navigate('/register');
  }

  const {round} = useContext(QuestionContext);
  return (
    <StyledInstructions>
      <img className='logo' src="Enigmalogo.png" alt="" />
      <div className="instructions">
        <div className="heading">
          <h1>Round - {round}</h1>
          <h1>INSTRUCTIONS</h1>
        </div>
        <div className='points'>
            <div className='point'><span>1.&nbsp;</span><p>A question will be given and you have to write the code for it within the given time limit.</p></div>
            <div className='point'><span>2. </span><p>You will have to write your code blindfolded, means you will be typing the code but you won't be able to see what you are typing.</p></div>
            <div className='point'><span>3. </span><p>You will get three chances to see your code during the contest. When you use a chance , your code will be revealed on the screen for a limited time. After the time is up your code will disappear again.</p></div>
            <div className='point'><span>4. </span><p>You are not allowed to copy-paste any external resources during the contest.</p></div>
            <div className='point'><span>5. </span><p>Winners will be selected on the basis of correctness of code, completeness of code and the least number of chances used to see the code.</p></div>
        </div>
      </div>
        <button className='next' onClick={handleNext}>Next &rarr;</button>
    </StyledInstructions>
  )
}

export default Instructions