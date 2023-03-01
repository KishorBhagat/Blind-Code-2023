import React from 'react'
import styled from 'styled-components';

const StyledQuestion = styled.div`
    height: 100%;
    background-color: #104765;
    border-top: 2px solid #D7D7D7;
    border-right: 2px solid #D7D7D7;
    border-bottom: 2px solid #D7D7D7;
    display: flex;
    flex-direction: column;
    .quesHeading{
        height: fit-content;
        background-color: inherit;
        padding: 10px 15px 5px 15px;
        color: #fff;
        font-size: 30px;
        font-weight: 500 ;
        flex: 1;
        background-color: inherit;
        ::selection {
            background-color: transparent;
        }
    }
    textarea{
        flex: 15;
        resize: none;
        width: 100%;
        background-color: inherit;
        font-size: 18px;
        color: #D7D7D7;
        border: none;
        outline: none;
        padding: 10px 15px;
        line-height: 1.8;
        background-color: inherit;
        overflow: hidden;
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