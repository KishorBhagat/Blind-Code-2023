import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components';
import Editor from '../Components/Editor';
import { useRef } from 'react';
import Question from '../Components/Question';
import ContestantDetails from '../Components/ContestantDetails';
import Timer from '../Components/Timer';
import { QuestionContext } from '../Context/QuestionContext';

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
  }

  .show{
      position: fixed;
      width: fit-content;
      top: 40px;
      right: 20px;
      button{
        padding: 5px;
        border-radius: 5px;
        border: none;
        color: #fff;
        background-color: #ff0000;
        cursor: pointer;
        transition: 0.05s ease all;
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
`;

const Contest = () => {

  const [viewChances, setViewChances] = useState(3);
  const [viewCount, setViewCount] = useState(0);
  const editorRef = useRef(null);
  const showBtnRef = useRef(null);

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
  
  // if(timeover){
  //   // trigger form submit
  // }

  const handleVisibilityChange = (event) => {
    if(document.visibilityState === 'hidden'){
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

  return (
    <StyledContest>
      <span className='timer'><Timer minutes={minutes} setTimeover={setTimeover} pageSwitched={pageSwitched}/></span>
      {/* <span><button type='submit' form='editorForm' >Submit</button></span> */}

      <ContestantDetails name={name} regdNo={regdNo} branch={branch} />
      <div className="container">
        <Editor ref={editorRef} name={name} regdNo={regdNo} branch={branch} viewCount={viewCount} timeover={timeover}/>
        <Question question={question} />
      </div>

      <div className='show'>
        <div className='count'>{viewChances}</div>
        <button onClick={handleClick} ref={showBtnRef}>Show Code</button>
      </div>
    </StyledContest>
  )
}

export default Contest