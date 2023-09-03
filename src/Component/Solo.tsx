import React from "react";
import styled from "@emotion/styled";
import {BsArrowRight} from "react-icons/bs"
import { Test } from "./Test";
import pic1 from "../assets/Image/PageMultiple.svg";
import pic2 from "../assets/Image/Bolt.svg";
import pic3 from "../assets/Image/DiagramOrgChart.svg";
import pic4 from "../assets/Image/SecurityCheckmark.svg";
import pic5 from "../assets/Image/Building.svg";

interface Iprops {
  changeSolution: () => void;
}
const Container = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  background-color: white;
  /* height: calc(90vh - 70px); */
  width: 100%;
  right: 0;
  left: 0;
  top: 70px;
  overflow: hidden;
  /* z-index: 2; */
`;
const Wrapper = styled.div`
  height: 300px;
  width: 100%;
  padding-left: 120px;
  display: flex;
  flex-direction: column;
`;
const One = styled.div`
  display: flex;
  align-items: center;
  gap: 50px; 
`;
const Two = styled.div`
  display: flex;
  gap: 50px;
`;
const Size = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  h6 {
    margin-bottom: 6px;
  }
  a {
    text-decoration: none;
    color: gray;
    font-size: 15px;
    margin-bottom: 10px;
    cursor: pointer;

    :hover {
      color: #2828f4;
    }
  }
`;
const Function = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  h6 {
    margin-bottom: 6px;
  }
  a {
    text-decoration: none;
    color: gray;
    font-size: 15px;
    margin-bottom: 10px;
    cursor: pointer;

    :hover {
      color: #2828f4;
    }
  }
`;
const Industry = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  h6 {
    margin-bottom: 6px;
  }
  a {
    text-decoration: none;
    color: gray;
    font-size: 15px;
    margin-bottom: 10px;
    cursor: pointer;

    :hover {
      color: #2828f4;
    }
  }
`;
const Second = styled.div`
display: flex;
flex-direction: column;
align-self: flex-start;
  padding-left: 20px;
  background-color: #f4f5f7;
  width: 800px;
  h6 {
    margin-bottom: 10px;
  }
  h4 {
    font-size: 15px;
    margin-bottom: 10px;
  }
  h5 {
    font-size: 17px;
  }
  p {
    font-size: 12px;
    width: 280px;
  }

  a {
    text-decoration: none;
    color: blue;
    font-size: 15px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  div {
    display: flex;
    align-items: center;
    gap: 10px;

    img {
      height: 40px;
    }
    h5 {
      font-size: 15px;
      font-weight: 500;
    }
  }
`;

export const Solo: React.FC<Iprops> = ({ changeSolution }) => {
  return (
    <Container onClick={changeSolution}>
      <Wrapper>
        <One>
          <Test
            avater={pic1}
            title="Work Management"
            text="Manage project and align goals across all teams to achieves"
            bg="#CEDDFF"
          />
          <Test
            avater={pic2}
            title="IT Service Management"
            text="Enable dev, IT ops, and business teams to deliver great service at high velocity"
            bg="#C8E6F7"
          />
          <Test
            avater={pic3}
            title="Agile & DevOps"
            text="Run a world-class agile software organization from discovery to delievery and operations"
            bg="#EEE7F9"
          />
        </One>
        <Two>
          <Size>
            <h6>BY TEAM SIZE</h6>
            <a href="">Enterprise</a>
            <a href="">Small Business</a>
            <a href="">Startup</a>
            <a href="">Non-profit</a>
          </Size>
          <Function>
            <h6>BY TEAM FUNCTION</h6>
            <a href="">Software Development</a>
            <a href="">IT</a>
            <a href="">Finance</a>
            <a href="">Marketing</a>
            <a href="">HR</a>
          </Function>
          <Industry>
            <h6>BY INDUSTRY</h6>
            <a href="">Retail</a>
            <a href="">Telecommunications</a>
            <a href="">Professional Services</a>
            <a href="">Government</a>
          </Industry>
        </Two>
      </Wrapper>
      <Second>
        <h6>WHAT'S NEW</h6>
        <h5>Atlassian Together</h5>
        <p>
          Get Atlassian work management product in one convenient package for
          enterprise teams
        </p>
        <a href="">Learn more <a><BsArrowRight/></a></a>

        <h4>YOU MIGHT FIND HELPFUL</h4>
        <div>
          <img src={pic4} />
          <h5>Atlassian Trust & Security</h5>
        </div>
        <div>
          <img src={pic5} />
          <h5>Customer Case Studies</h5>
        </div>
      </Second>
    </Container>
  );
};