
import React from "react";
import styled from "@emotion/styled";
import { WorkProps } from "./WorkProps";
import { BsArrowRight } from "react-icons/bs";
import pic from "../assets/Image/solutions_1_Con_Trello_JWM.svg";
import pic1 from "../assets/Image/jira software-icon-gradient-blue.svg";
import pic2 from "../assets/Image/Jira Product Discovery-icon-blue.svg";
import pic3 from "../assets/Image/Jira Align-icon-blue-rgb.svg";
import pic4 from "../assets/Image/compass-mark-gradient-blue.svg";
import pic5 from "../assets/Image/logos-bitbucket-icon-gradient-blue.svg";
interface Iprops {
  changeAilge: () => void;
}
const Container = styled.div`
  width: 100%;
  background-color: #f8fbff;
  position: absolute;
  top: 250px;
  left: 0;
`;
const Holder = styled.div`
  display: flex;
  justify-content: center;
`;
const First = styled.div`
text-align: left;
  h3 {
    font-size: 24px;
    width: 380px;
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
const WorkHold = styled.div`
  margin-top: 20px;
`;
const Second = styled.div`
  img {
    width: 850px;
  }
`;
export const Ailge: React.FC<Iprops> = ({ changeAilge }) => {
    return (
      <Container onClick={changeAilge}>
        <Holder>
          <First>
            <h3>
              Run a world-class agile software company—from discovery to delivery
              and operations
            </h3>
            <a href="">
              Explore Open DevOps{" "}
              <a>
                <BsArrowRight />
              </a>
            </a>
            <WorkHold>
              <WorkProps
                avater={pic1}
                title="Jira Software"
                text="Project and issuse tracking"
              />
  
              <WorkProps
                avater={pic2}
                title="Jira Product Discovery"
                text="Priorirization and roadmapping"
              />
  
              <WorkProps
                avater={pic3}
                title="Jira Align"
                text="Enterprise Agile planing"
              />
  
              <WorkProps
                avater={pic4}
                title="Compas"
                text="Developer experience platform"
              />
  
              <WorkProps avater={pic5} title="Bitbucket" text="Code & CI/CD" />
            </WorkHold>
          </First>
          <Second>
            <img src={pic} />
          </Second>
        </Holder>
      </Container>
    );
  };
