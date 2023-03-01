import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components';
import Editor from '../Components/Editor';
import { useRef } from 'react';
import Question from '../Components/Question';
import ContestantDetails from '../Components/ContestantDetails';
import Timer from '../Components/Timer';
import { QuestionContext } from '../Context/QuestionContext';
import Thanks from '../Components/Thanks';

const StyledContest = styled.div`
  height: 100vh;

  .container{
    display: flex;
  }

  .timer{
    /* background-color: pink; */
    position: absolute;
    color: #fff;
    /* right: 30%; */
    left: 70%;
    top: 62px;
    font-size: 18px;
  }

  .submitBtn{
    position: absolute;
    bottom: 20px;
    right: 20px;
    button{
      padding: 5px 20px;
      border-radius: 3px;
      border: none;
      color: #fff;
      font-size: 15px;
      background-color: #ff0000;
      cursor: pointer;
      transition: 0.05s all;
      :hover{
        filter: drop-shadow(0 0 0.2rem #ff0000);
      }
      :active{
        transform: scale(0.95);
      }
    }
  }

  .show{
      position: fixed;
      width: fit-content;
      top: 40px;
      right: 20px;
      button{
        padding: 5px;
        border-radius: 3px;
        border: none;
        color: #fff;
        background-color: #ff0000;
        cursor: pointer;
        transition: 0.05s ease all;
        :hover{
          filter: drop-shadow(0 0 0.2rem #ff0000);
        }
        :active{
          transform: scale(0.95);
        }
      }
      .count{
        position: relative;
        z-index: 10;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 13px;
        /* background-color: green; */
        background-color: #ff0000;
        color: white;
        height: 20px;
        width: 20px;
        border-radius: 50%;
        top: 12px;
        left: 75px;
        border-right: 0.5px solid #c40606;
        border-bottom: 0.5px solid #c40606;
        box-shadow: rgba(0, 0, 0, 0.39) 0px 2px 1.5px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
      }
    }
    .contest{
      position: relative;
      top: -100%;
      /* z-index: -1; */
      /* filter: blur(1px); */
      z-index: 10;
    }
`;

const Contest = () => {

  const [viewChances, setViewChances] = useState(3);
  const [viewCount, setViewCount] = useState(0);
  const editorRef = useRef(null);
  const showBtnRef = useRef(null);
  const mainRef = useRef(null);

  const [name, setName] = useState("");
  const [regdNo, setRegdNo] = useState("");
  const [branch, setBranch] = useState("");

  const [timeover, setTimeover] = useState(false);

  const [pageSwitched, setPageSwitched] = useState(false);


  // const question = "Write a program to print the following pattern given below.\n\t\t\t1\n\t\t\t1 2\n\t\t\t1 2 3";
  // const minutes = 1;
  const { minutes, question, setMinutes } = useContext(QuestionContext);

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.focus();
    }
  }, []);

  useEffect(() => {
    setName(localStorage.getItem("name"));
    setRegdNo(localStorage.getItem("regdNo"));
    setBranch(localStorage.getItem("branch"));
  }, []);


  const handleClick = () => {

    if (viewChances > 0) {

      setViewChances(viewChances - 1);
      setViewCount(4 - viewChances);
      // editorRef.current.style.color = "green"; 
      editorRef.current.style.color = "#D7D7D7";
      showBtnRef.current.setAttribute('disabled', true);
      editorRef.current.focus();

      setTimeout(() => {
        editorRef.current.style.color = "black";
        showBtnRef.current.removeAttribute('disabled');
      }, 3000);

    }
  }

  useEffect(() => {

    if (timeover) {
      mainRef.current.style.zIndex = "-1"
      return () => setTimeover(false);
    }
  }, [timeover])

  const handleVisibilityChange = (event) => {
    if (document.visibilityState === 'hidden') {
      setPageSwitched(true);
    }
    else {
      setPageSwitched(false);
    }
  };

  useEffect(() => {
    window.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  const [submitBtnHandler, setSubmitBtnHandler] = useState(false);

  return (
    <StyledContest>
      <Thanks />

      <div className='contest' ref={mainRef}>

        <span className='timer'><Timer minutes={minutes} setTimeover={setTimeover} pageSwitched={pageSwitched} submitBtnHandler={submitBtnHandler}/></span>
        <span className="submitBtn"><button type='submit' form='editorForm' >Submit</button></span>

        <ContestantDetails name={name} regdNo={regdNo} branch={branch} />
        <div className="container">
          <Editor ref={editorRef} name={name} regdNo={regdNo} branch={branch} viewCount={viewCount} timeover={timeover} setTimeover={setTimeover} setSubmitBtnHandler={setSubmitBtnHandler}/>
          <Question question={question} />
        </div>

        <div className='show'>
          <div className='count'>{viewChances}</div>
          <button onClick={handleClick} ref={showBtnRef}>Show Code</button>
        </div>
      </div>
    </StyledContest>
  )
}

export default Contest