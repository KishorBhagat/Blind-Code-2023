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
      position: absolute;
      top: 10px;
      left: 10px;
      height: 100px;
      width: 100px;
    }
    .instructions{
      /* margin-bottom: 50px; */
      padding-bottom: 100px;
      width: 1000px;
      .heading{
        margin-bottom: 40px;
        /* color: #f37c1e; */
        color: var(--enigma-green);


        h1{
          text-align: center;
        }
      }
      .points{
        .point{
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin: 20px 0;
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
            <div className='point'><span>1. &nbsp;</span><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste ut, totam hic cumque aliquid sit. Perspiciatis dolor aut natus ipsam.</p></div>
            <div className='point'><span>2. </span><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste ut, totam hic cumque aliquid sit. Perspiciatis dolor aut natus ipsam.</p></div>
            <div className='point'><span>3. </span><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste ut, totam hic cumque aliquid sit. Perspiciatis dolor aut natus ipsam.</p></div>
            <div className='point'><span>4. </span><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste ut, totam hic cumque aliquid sit. Perspiciatis dolor aut natus ipsam.</p></div>
            <div className='point'><span>5. </span><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste ut, totam hic cumque aliquid sit. Perspiciatis dolor aut natus ipsam.</p></div>
        </div>
      </div>
        <button className='next' onClick={handleNext}>Next &rarr;</button>
    </StyledInstructions>
  )
}

export default Instructions