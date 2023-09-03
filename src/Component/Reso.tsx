import styled from "@emotion/styled";
import React from "react";
import {BsArrowRight} from "react-icons/bs"
import pic from "../assets/Image/Screen Shot 2023-01-05.jpg";

interface Iprops{
    changeReso:()=>void;
}

const Container = styled.div`
  position: absolute;
  background-color: white;
  height: 75vh;
  width: 100%;
  right: 0;
  left: 0;
  top: 70px;
  overflow: hidden;
  display: flex;
  gap: 60px;
`;
const Up = styled.div`
  display: flex;
  gap: 50px;
  margin-bottom: 50px;
`;
const Wrapper = styled.div`
  padding-left: 130px;
`;
const Learn = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  a {
    margin-bottom: 10px;
    text-decoration: none;
    color: #202020;
    font-size: 15px;

    :hover {
      color: #2e2efc;
    }
  }
`;

const Support = styled.div`
  padding: 25px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 760px;
  background-color: #e6fcff;

  button {
    cursor: pointer;
    background: none;
    color: #2727f3;
    padding: 10px 20px;
    border-radius: 5px;
    border: 2px solid #2727f3;
  }
  div {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    h5 {
      margin: 0;
    }
    p {
      font-size: 14px;
      width: 500px;
      margin: 0;
    }
  }
`;
const Down = styled.div`
  background-color: #f4f5f7;
  padding-left: 20px;
  width: 100%;

  img {
    width: 300px;
  }

  p {
    font-size: 15px;
    width: 300px;
  }
  a {
    text-decoration: none;
    color: #1a1af1;
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

export const Reso: React.FC<Iprops> = ({changeReso}) => {
  return (
    <Container onClick={changeReso}>
      <Wrapper>
        <Up>
          <Learn>
            <h5>LEARN</h5>
            <a href="">Atlassian University</a>
            <a href="">Atlassian Playbook</a>
            <a href="">Product Documentation</a>
          </Learn>
          <Learn>
            <h5>SUPPORT</h5>
            <a href="">Atlassian Community</a>
            <a href="">Atlassian Support</a>
            <a href="">Atlassian Migration Program</a>
            <a href="">Enterprise Support</a>
            <a href="">Partner Support</a>
            <a href="">Purchasing & Licensing</a>
          </Learn>
          <Learn>
            <h5>CONNECT</h5>
            <a href="">About us</a>
            <a href="">Careers</a>
            <a href="">Work Life Blog</a>
            <a href="">Event</a>
          </Learn>
        </Up>
        <Support>
          <div>
            <h5>Support Server product ends February 15, 2024</h5>
            <p>
              With end of support for our Server product fast approaching,
              create a winning plan for your Cloud migration with the Atlassian
              Migration Program
            </p>
          </div>
          <button>Assess my options</button>
        </Support>
      </Wrapper>
      <Down>
        <h5>WHAT'S NEW</h5>
        <img src={pic} alt="" />

        <h4>Atlassian Team'23</h4>
        <p>
          Catch up on the lastest Atlassian product announcements and
          innovations shared live on stage in Las Vegas
        </p>
        <a href="">Watch now <a><BsArrowRight/></a> </a>
      </Down>
    </Container>
  );
};