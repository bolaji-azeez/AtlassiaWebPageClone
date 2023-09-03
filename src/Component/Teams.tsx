import React from "react";
import {BsArrowRight} from "react-icons/bs"
import styled from "@emotion/styled";
import pic1 from "../assets/Image/kiva.svg"
import pic2 from "../assets/Image/twitter.svg"
import pic3 from "../assets/Image/redfin.svg"
import pic4 from "../assets/Image/nasa.svg"
import pic5 from "../assets/Image/audi.svg"
import pic6 from "../assets/Image/castlight.svg"

const Container = styled.div`
background-color: #F7FAFF;
`;
const Holder =styled.div`
text-align: center;
margin-bottom: 20px;

a{
    font-size: 18px;
    color: blue;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: center;

}
`
const H1 = styled.h4`
margin-top: 0;
margin-bottom: 10px;
`;
const ImageHolder = styled.div`
width: 100%;
height: 200px;
background-color: #E2EDFF;
display: flex;
justify-content: center;
align-items: center;
gap: 80px;

img{
height: 58px;
}
`;


export const Teams: React.FC = () => {
  return (
    <Container>
      <Holder>
        <H1>
          Join the 250,000+ companies that use our software to power team
          collaboration
        </H1>
          
        <a href="">see all customers <a><BsArrowRight/></a> </a>
      </Holder>
      <ImageHolder>
        <img src= {pic1}/>
        <img src= {pic2}/>
        <img src= {pic3}/>
        <img src= {pic4}/>
        <img src= {pic5}/>
        <img src= {pic6}/>
      </ImageHolder>
    </Container>
  );
};