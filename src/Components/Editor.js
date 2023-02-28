import { setSelectionRange } from '@testing-library/user-event/dist/utils';
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
            border: 2px solid #D7D7D7;
            padding: 10px 15px;
            font-size: 18px;
            caret-color: currentColor;
            /* color: var(--enigma-green); */
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
                border-radius: 10px;
            }
            :focus{
                outline: none;
                border: 2px solid #08f308;
            }
        }
    }
`;

const Editor = (props, ref) => {
    
    const { name, regdNo, branch, viewCount, timeover } = props;
    const {round, setMinutes} = useContext(QuestionContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        props.setSubmitBtnHandler(true);
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
        const submitResponse = async () => {
            try {
                const response = await axios.post('https://blind-code.onrender.com/api/code/submitcode', formObj);
                // ref.current.style.color = "green";
                ref.current.style.color = "#D7D7D7";
                ref.current.setAttribute('readOnly', "on");
                localStorage.clear();         
            } catch (error) {
                localStorage.clear();         
                console.log(error);
            }
        }
        submitResponse();
    }


    const handleKey = (e)=> {
        if(e.code == 'Tab'){
            e.preventDefault();
            let caretPos = e.currentTarget.selectionStart;
            ref.current.value = e.currentTarget.value.substring(0, caretPos) + '    ' + e.currentTarget.value.substring(caretPos);
            e.currentTarget.setSelectionRange(caretPos+4, caretPos+4);
        }
    }

    return (
        <StyledEditor className='editor'>
            <form id='editorForm' onSubmit={handleSubmit}>
                <textarea spellCheck="false" ref={ref} onKeyDown={handleKey}></textarea>
            </form>
        </StyledEditor>
    )
}

export default forwardRef(Editor) 