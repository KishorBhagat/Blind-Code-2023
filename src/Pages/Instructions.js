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
    .instructions{
      /* background-color: pink; */
      width: 1000px;
      .heading{
        margin-bottom: 30px;
        h1{
          text-align: center;
        }
      }
      p{
        font-size: 22px;
        margin: 20px 0;
        text-align: justify;
      }
    }

    .next{
      position: absolute;
      bottom: 50px;
      right: calc(50% - 500px);
      cursor: pointer;
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
      <div className="instructions">
        <div className="heading">
          <h1>Round - {round}</h1>
          <h1>INSTRUCTIONS</h1>
        </div>
        <div className="instructions">
            <p>1. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste ut, totam hic cumque aliquid sit. Perspiciatis dolor aut natus ipsam.</p>
            <p>2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta inventore facere rerum aut architecto ipsam corporis autem culpa perspiciatis fugit? Autem, exercitationem quisquam vero voluptas quaerat eligendi aspernatur dolorum repellendus?</p>
            <p>3. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius aperiam porro distinctio vero nemo! Numquam!</p>
            <p>4. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor amet, expedita nesciunt magni atque assumenda placeat ipsum veniam maxime ut!</p>
        </div>
      </div>
        <button className='next' onClick={handleNext}>Next</button>
    </StyledInstructions>
  )
}

export default Instructions