import React from 'react'
import styled from '@emotion/styled'
import Pic1 from "../assets/Image/CareersCenterMobile.svg"
import Pic2 from "../assets/Image/CareersRight_540x450.svg"
import Button from './Button/Button'


const Container =styled.div`
    background-color: white;
    height: 70vh;
    width: 100%;
    background-image: url(${Pic1}), url(${Pic2});
    background-repeat: no-repeat, no-repeat;
    background-position: bottom left, bottom right;
    background-size: 400px, 380px;
`
const Wrapper =styled.div`
text-align: center;
display: flex;
align-items: center;
flex-direction: column;
    
    h2{
        color: #2684ff;
    font-size: 15px;
    font-weight: 800;
    margin-top: 100px;
    }

    h1{
        font-size: 45px;
        margin: 0;

    }

    p{
        width: 400px;
    }
`

export const Careers:React.FC = () => {
  return (
  <Container>
    <Wrapper>
        <h2>CAREERS</h2>
        <h1>We can’t do it alone</h1>
        <p>We have an ambitious road ahead, and we’re looking for people to join our global team to help shape the future of Atlassian.</p>
        <Button title='Join the team' bg='#0054BB' cl='white'/>
    </Wrapper>
  </Container>
  )
}