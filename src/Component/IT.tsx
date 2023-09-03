import styled from '@emotion/styled'
import { BsArrowRight } from 'react-icons/bs'
import React from 'react'
import { WorkProps } from './WorkProps'
import pic from "../assets/Image/solutions_2_JSM.svg"
import pic1 from "../assets/Image/jira service desk-icon-gradient-blue.svg"
interface Iporps{
    changeIT:()=>void
}
const Cont =styled.div`
  /* background-color: red; */
  width: 100%;
  background-color: #ffffff;
  position: absolute;
  top: 250px;
  left: 0;
 
`
const Holder = styled.div`
display: flex;
justify-content: center;
`;
const First = styled.div`
text-align: left;
  h3 {
    font-size: 24px;
    width: 380px;
    width: 350px;
  }
  a {
    text-decoration: none;
    font-size: 16px;
    color: blue;
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;
const WorkHold=styled.div`
margin-top: 20px;
`
const Second = styled.div`
  img {
   width: 850px;
  }
`;
export const IT:React.FC<Iporps> = ({changeIT}) => {
  return (
    <Cont onClick= {changeIT}>
           <Holder>
        <First>
          <h3>
          Enable your dev, IT ops, and business teams to deliver great service experiences</h3>
          <a href="">Deliver at high velocity <a><BsArrowRight/></a></a>
          <WorkHold>
          <WorkProps
            avater={pic1}
            title="Jira Service Management"
            text="High-velocity ITSM"
          />
          </WorkHold>
        </First>
        <Second>
          <img src={pic} />
        </Second>
      </Holder>
    </Cont>
  )
}