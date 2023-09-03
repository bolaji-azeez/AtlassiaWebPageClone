import React from "react";
import styled from "@emotion/styled";
import { WorkProps } from "./WorkProps";
import { BsArrowRight } from "react-icons/bs";
import pic from "../assets/Image/solutions_1_Con_Trello_JWM.svg";
import pic1 from "../assets/Image/confluence-icon-gradient-blue.svg";
import pic2 from "../assets/Image/trello-icon-gradient-blue.svg";
import pic3 from "../assets/Image/jira service desk-icon-gradient-blue.svg";
import pic4 from "../assets/Image/logos-atlas-icon-gradient-blue.svg";




const Container = styled.div`
width: 100%;
height: 110vh;
background-color: #ffffff;
`;
const Holder = styled.div`
display: flex;
justify-content: center;
`;
const First = styled.div`
  h3 {
  font-size: 24px;
  width: 350px;
  }
  a {
    text-decoration: none;
    font-size: 13px;
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
/* background-color:red; */
  img {
   width: 800px;
  }
`;







export const Dive: React.FC = () => {
  return (
    <Container>
      <Holder>
        <First>
          <h3>
            Make work flow across teams while connecting back to company goals
          </h3>
          <a href="">Work differently, together <a><BsArrowRight/></a></a>
          <WorkHold>
          <WorkProps
            avater={pic1}
            title="Confluence"
            text="Content collaboration"
          />

          <WorkProps
            avater={pic2}
            title="Trello"
            text="Visual project management"
          />

          <WorkProps
            avater={pic3}
            title="Jira work Management"
            text="Business team collaboration"
          />

          <WorkProps
            avater={pic4}
            title="Atlas"
            text="Teamwork directory"
          />
          </WorkHold>
        </First>
        <Second>
          <img src={pic} />
        </Second>
      </Holder>
    </Container>
  );
};