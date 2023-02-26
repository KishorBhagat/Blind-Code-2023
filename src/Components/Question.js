import React from 'react'
import styled from 'styled-components';

const StyledQuestion = styled.div`
    flex: 30;
    height: 87vh;
    background-color: #104765;
    /* background-color: #10386f; */
    border-top: 2px solid #D7D7D7;
    border-right: 2px solid #D7D7D7;
    border-bottom: 2px solid #D7D7D7;

    .quesHeading{
        height: 50px;
        background-color: inherit;
        padding: 10px 15px;
        margin-bottom: 10px;
        color: #fff;
        font-size: 30px;
        font-weight: 500 ;
    }
    textarea{
        resize: none;
        width: 100%;
        height: calc(100% - 60px);
        background-color: inherit;
        font-size: 18px;
        color: #D7D7D7;
        border: none;
        outline: none;
        padding: 10px 15px;
        line-height: 1.8;

        :focus{
            border: none;
            outline: none;
        }
        ::selection {
            background-color: transparent;
        }
    }
`;

const Question = ({question}) => {
    return (
        <StyledQuestion>
            <h2 className='quesHeading'>Question</h2>
            <textarea autoFocus readOnly="on" spellCheck="false" value={question}></textarea>
        </StyledQuestion>
    )
}

export default Question