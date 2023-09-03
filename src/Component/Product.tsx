import  styled from "@emotion/styled";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { WorkProps } from "./WorkProps";
import pic1 from "../assets/Image/logos-atlas-icon-gradient-blue.svg";
import pic2 from "../assets/Image/Jira Product Discovery-icon-blue.svg";
import pic3 from "../assets/Image/Map.svg";
import pic4 from "../assets/Image/CloudCheckmark.svg";
import pic5 from "../assets/Image/jira software-icon-gradient-blue.svg";
import pic6 from "../assets/Image/mark-gradient-blue-jira-work-management.svg";
import pic7 from "../assets/Image/confluence-icon-gradient-blue.svg";
import pic8 from "../assets/Image/trello-icon-gradient-blue.svg";


interface Iprops {
    changeProductShow: () => void;
  }
  
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  background-color: white;
  width: 100%;
  height: calc(90vh - 70px);
  right: 0;
  left: 0;
  top: 70px;
  overflow: hidden;
  z-index: 2;
`;
const First = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 120px;
  div {
    h5 {
      margin-bottom: 0;
    }
    a {
      padding: 0;
      margin: 0;
      color: #282727;
      font-size: 12px;
    }
  }
  h4 {
    margin-bottom: 10px;
  }

  a {
    text-decoration: none;
    cursor: pointer;
    color: blue;
  }
`;

const Second = styled.div`
  background-color: #f4f5f7;
  width: 500px;
  height: 90vh;
  padding-left: 20px;
  padding-right: 120px;
  padding-top: 30px;
  a {
    text-decoration: none;
    cursor: pointer;
    color: blue;
    display: flex;
    align-items: center;
  }
`;

const Box2 = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 15px;
  img {
    height: 40px;
  }
  h4 {
    margin: 0;
  }
`;
const Holder = styled.div`
  display: flex;
  align-items: center;
  gap: 150px;
`;
export const Product: React.FC<Iprops> = ({changeProductShow}) => {
  return (
    <Container onClick={changeProductShow}>
      <First>
        <h4>FEATURED</h4>
        <Holder>
          <div>
            <WorkProps
              avater={pic5}
              title="Jira Software"
              text="Project and issue tracking"
            />
            <WorkProps
              avater={pic6}
              title="Jira Service Management"
              text="High-velocity ITSM"
            />
          </div>
          <div>
            <WorkProps
              avater={pic7}
              title="Confluence"
              text="Content collaboration"
            />
            <WorkProps
              avater={pic8}
              title="Trello"
              text="Visual project management"
            />
          </div>
        </Holder>
        <a href="">
          View all product{" "}
          <a>
            <BsArrowRight />
          </a>
        </a>

        <div>
          <h5>Marketplace</h5>
          <a href="">
            Connect thousand of apps and integrations for all your Atlassian
            products{" "}
            <a>
              <BsArrowRight />
            </a>
          </a>
        </div>
      </First>

      <Second>
        <h5>WHAT'S NEW</h5>
        <div>
          <WorkProps avater={pic1} title="Atlas" text="Teamwork directory" />
          <WorkProps
            avater={pic2}
            title="Jira Product Discovery"
            text="Prioritization and roadmapping"
          />
        </div>
        <a href="">View all</a>

        <h4>YOU MIGHT FIND HELPFUL</h4>
        <Box2>
          <img src={pic3} />
          <h4>roadmapping</h4>
        </Box2>
        <Box2>
          <img src={pic4} />
          <h4>roadmapping</h4>
        </Box2>
      </Second>
    </Container>
  );
};