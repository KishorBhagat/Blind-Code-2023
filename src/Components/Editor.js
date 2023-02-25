import axios from 'axios';
import React, { forwardRef, useContext } from 'react'
import styled from 'styled-components';
import { QuestionContext } from '../Context/QuestionContext';

const StyledEditor = styled.div`
    flex: 70;
    form{
        height: 87vh;
        
        textarea{
            font-family: 'Source Code Pro', monospace;
            height: 100%;
            width: 100%;
            resize: none;
            background-color: black;
            /* border: none; */
            border-top: 2px solid #D7D7D7;
            border-right: 2px solid #D7D7D7;
            /* border-left: none;
            border-bottom: none; */
            border-left: 2px solid #D7D7D7;
            border-bottom: 2px solid #D7D7D7;

            padding: 10px 15px;
            font-size: 18px;
            caret-color: currentColor;
            /* color: black; */
            
            ::selection {
                background-color: transparent;
            }
            ::-webkit-scrollbar {
                width: 6px;
            }
            ::-webkit-scrollbar-track {
                background: black;
            }
            ::-webkit-scrollbar-thumb {
                background: #D7D7D7;
                /* background: #000; */
                border-radius: 10px;
            }
            :focus{
                outline: none;
                border: 2px solid red;
            }
        }
    }
`;

const Editor = (props, ref) => {

    const { name, regdNo, branch, viewCount, timeover } = props;
    const {round} = useContext(QuestionContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const code = e.target.elements[1].value;
        const formObj = {
            name,
            regdNo,
            branch,
            code,
            viewCount
        }

        const getQuestion = async () => {
            try {
                const response = await axios.post('https://blind-code.onrender.com/api/code/submitcode', formObj);
                // ref.current.style.color = "green";
                ref.current.style.color = "#D7D7D7";
                ref.current.setAttribute('readOnly', "on")
                console.log(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        getQuestion();
    }

    
    if(timeover){
        const code = ref.current.value;
        const formObj = {
            name,
            regdNo,
            branch,
            round,
            code,
            viewCount
        }
        const getQuestion = async () => {
            try {
                const response = await axios.post('https://blind-code.onrender.com/api/code/submitcode', formObj);
                // ref.current.style.color = "green";
                ref.current.style.color = "#D7D7D7";
                ref.current.setAttribute('readOnly', "on");
                localStorage.clear();         
                // console.log(response.data);
            } catch (error) {
                localStorage.clear();         
                // console.log(error);
            }
        }
        getQuestion();
    }

    return (
        <StyledEditor className='editor'>
            <form id='editorForm'>
                <textarea spellCheck="false" ref={ref}></textarea>
            </form>
        </StyledEditor>
    )
}

export default forwardRef(Editor) 