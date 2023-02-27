import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


const StyledRegister = styled.main`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: black;
    /* background-color: #104765; */

    .register{
      
      form{
        display: flex;
        flex-direction: column;
        width: 300px;
        justify-content: center;
        align-items: center;

        input{
          width: 400px;
          margin: 8px;
          padding: 10px;
          font-size: 18px;
          border-radius: 5px;
          border: 2px solid black;
          :focus{
            outline: 2px solid #f37c1e;
            /* border: 2px solid #f37c1e; */
          }
        }

        button[type='submit']{
          width: fit-content;
          padding: 5px 20px;
          border-radius: 5px;
          font-size: 18px;
          margin-top: 20px;
          cursor: pointer;
          border: none;
          background-color: #f37c1e;
          color: white;
          transition: 0.2s all;
          :hover{
            opacity: 0.5;
          }
          :active{
            opacity: 1;
          }
        }
      }
    }

    .prev{
      /* width: 100px; */
      position: absolute;
      bottom: 50px;
      left: calc(50% - 500px);
      cursor: pointer;
      background-color: transparent;
      color: #f37c1e;
      font-size: 30px;
      font-weight: 500;
      border: none;
    }
`;

const Register = ({setIsuser}) => {
  const navigate = useNavigate();

  const formData = {};
  const handleSubmit = (e) => {
    e.preventDefault();
    for (let i = 0; i < e.target.length - 1; i++) {
      formData[e.target.elements[i].getAttribute("name")] = e.target.elements[i].value;
    }
    setIsuser(true);
    localStorage.setItem("name", formData.name);
    localStorage.setItem("regdNo", formData.regdNo);
    localStorage.setItem("branch", formData.branch);

    navigate('/contest');
  }

  const handlePrev = (e) => {
    e.preventDefault();
    navigate('/');
  }

  return (
    <StyledRegister>
      <div className="register">
        <form onSubmit={handleSubmit}>
          <input autoComplete='off' name="name" type="text" placeholder='Full name' required />
          <input autoComplete='off' name="regdNo" type="text" placeholder='Registration No.' required />
          <input autoComplete='off' name="branch" type="text" placeholder='Branch' required />
          <button type='submit'>START</button>
        </form>
      </div>
      <button onClick={handlePrev} className="prev"><span>&larr;</span> Go Back</button>
    </StyledRegister>
  )
}

export default Register