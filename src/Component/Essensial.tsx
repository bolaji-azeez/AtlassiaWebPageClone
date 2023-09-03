import React from "react";
import styled from "@emotion/styled";
import Pic from "../assets/Image/Community@2x.jpg";
import pic1 from "../assets/Image/Blog_360x265@2x.jpg";
import pic2 from "../assets/Image/Team%20Playbook_360x265@2x.png";
import pic3 from "../assets/Image/Agile 20Coach_360x265@2x.png";
import pic4 from "../assets/Image/ITSM HighVelocity 23.png"
import pic5 from "../assets/Image/Team23_Event2x.png"
import { EssentialsProp } from "./EssensialProps";

const Container = styled.div`

`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 90px;
  margin-bottom: 40px;
  padding-top: 50px;
`;
const First = styled.div`
  h1 {
    color: #2684ff;
    font-size: 15px;
    font-weight: 800;
  }

  h2 {
    font-size: 35px;
    width: 400px;
  }
`;
const Second = styled.div`
  width: 700px;
  height: 400px;
  background-color: #fffae5;
  overflow: hidden;
  text-align: center;

  img {
    width: 100%;
    height: 50%;
  }

  p {
    margin-bottom: 40px;
  }

  div {
    display: flex;
    justify-content: center;
    gap: 100px;

    a {
      color: #3333fe;
      text-decoration: none;
      font-weight: 600;
    }
  }

  :hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;


const ImageHolder = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 60px;
`;

const Atle =styled.div`
display: flex;
gap: 50px;
margin-top: 40px;
`
const IM =styled.img`
  height: 400px;
  width: 380px;
  border-radius: 5px;

  :hover{
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`
const Event =styled.div`
display: flex;
align-items: center;
justify-content: center;
`
const Event1 =styled.div`

h1{
  color: #2684ff;
    font-size: 15px;
    font-weight: 800;
    margin-bottom: 10px;
    
}

h3{
  font-size: 35px;
    width: 400px;
    margin: 0;
}

a{
  text-decoration: none;
  color: #1477fa;
}
`





export const Essentials: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <First>
          <h1>TEAM ESSENTIALS</h1>
          <h2>Explore resources to unleash the potential of your team</h2>
        </First>
        <Second>
          <img src={Pic} />
          <h2>Atlassian Community</h2>
          <p>
            Connect globally and meet locally to get more out of our products.
          </p>
          <div>
            <a href="">Search the forum</a>
            <a href="">Join our community</a>
          </div>
        </Second>
      </Wrapper>

      <ImageHolder>
        <EssentialsProp
          avater={pic1}
          title="Work Life"
          text="Real-life advice, inspiration, and stories from the working world today."
          to="Read our blog"
          bg="#EAE6FF"
        />

        <EssentialsProp
          avater={pic2}
          title="Atlassian Team Playbook"
          text="Solve common team challenges with these group exercises."
          to="Check team health"
          bg="#D4FAFF"
        />

        <EssentialsProp
          avater={pic3}
          title="Work Life"
          text="Atlassian's no-nonsense guide to agile development."
          to="Visit our resource"
          bg="#DEEBFF"
        />
      </ImageHolder>

      <Event>
        <Event1>
         <h1>Event</h1>
         <h3>Hear from today’s fearless builders and innovators</h3>
         <a href="">Learn more</a>
        </Event1>
        <Atle>
          <IM src={pic4} />
          <IM src={pic5} />
        </Atle>
      </Event>
    </Container>
  );


};