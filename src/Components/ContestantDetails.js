import React from 'react'
import styled from 'styled-components';

const StyledContest = styled.div`
    background-color: #104765;
    /* background-color: #10386f; */
    color: white;
    padding: 10px 15px;
    width: 100%;
    height: 13vh;
    line-height: 1.8;
    /* font-size: 18px; */
    border-top: 2px solid #D7D7D7;
    border-right: 2px solid #D7D7D7;
    border-left: 2px solid #D7D7D7;
    .details{
      display: flex;
      .tag{
        width: 85px;
        display: flex;
        justify-content: space-between;
      }
    }
`;

const ContestantDetails = ({name, regdNo, branch}) => {
  return (
    <StyledContest>
        <div className='details'>
          <div className='tag'>
            <span>Name</span><span>:&nbsp;&nbsp;</span>
          </div>
          <div>{name}</div>
        </div>
        <div className='details'>
          <div className='tag'>
            <span>Regd No</span><span>:&nbsp;&nbsp;</span>
          </div>
          <div>{regdNo}</div>
        </div>
        <div className='details'>
          <div className='tag'>
            <span>Branch</span><span>:&nbsp;&nbsp;</span>
          </div>
          <div>{branch}</div>
        </div>
        {/* <p>Name : &nbsp;&nbsp;{name}</p> */}
        {/* <p>Regd No : &nbsp;&nbsp;{regdNo}</p> */}
        {/* <p>Branch : &nbsp;&nbsp;{branch}</p> */}
    </StyledContest>
  )
}

export default ContestantDetails