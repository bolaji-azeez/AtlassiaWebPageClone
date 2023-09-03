import styled from "@emotion/styled";
import React, {useState} from "react";
import { ButtonPro } from "./Button/ButtonPro";
import { Work } from "./Work";
import { IT } from "./IT";
import { Ailge } from "./Ailge";


const Container = styled.div`
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  text-align: center;
  position: relative;

  h2{
    margin: 0;
    padding-top: 40px;
    padding-bottom: 40px;

  }
`;
const ButHolder =styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  padding-bottom: 50px;
  
`
export const Paper: React.FC = () => {
  const [page, setPage]= useState<boolean>(false)
  const [itPage, setIT]= useState<boolean>(false)
  const [Ail, setAilge]= useState<boolean>(false)

  const changePage =()=>{
    setPage(true)
    setIT(false)
    setAilge(false)
  }

  const changeIT=()=>{
    setIT(true)
    setPage(false)
    setAilge(false)
  }

  const changeAilge =()=>{
    setAilge(true)
    setIT(false)
    setPage(false)
  }

  return (
    <Container>
      <h2>Atlassian solutions are designed for all types of work</h2>
      <ButHolder>
        <ButtonPro  btn={changePage} bg="#DEEBFF" title="Work Management" />
        {page ? (
						<div>
							<Work changePage={changePage} />
						</div>
					) : null}
        <ButtonPro btn={changeIT} bg="#DEEBFF" title="IT Service Management" /> 
        {itPage ? (
						<div>
							<IT changeIT={changeIT} />
						</div>
					) : null}
        <ButtonPro btn={changeAilge} bg="#DEEBFF" title="Agile and DevOps" />
        {Ail ? (
          <div>
            <Ailge changeAilge={changeAilge} />
          </div>
        ):null}
      </ButHolder>
    </Container>
  );
};