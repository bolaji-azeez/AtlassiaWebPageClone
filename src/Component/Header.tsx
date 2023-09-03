import styled from "@emotion/styled";
import React, { useState } from "react";
import log from "../assets/Image/Logo.svg";
import { AiOutlineDown } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import Button from "./Button/Button";
import { Solo } from "./Solo";
import { Reso } from "./Reso";
import { Product } from "./Product";

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  height: 70px;
  padding: 0 120px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  /* z-index: 10; */
`;

const Navigations = styled.div`
  display: flex;
  align-items: center;
`;
const Nav = styled.nav``;
const NavHold = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 10px 15px 10px 15px;
  border-radius: 5px;
  transition: all 350ms;

  :hover {
    background-color: #c7c7c7;
  }

  span {
    margin-top: 5px;
    margin-left: 2px;
  }
`;
const Logo = styled.img`
  width: 200px;
  margin-right: 50px;
`;
const Hold = styled.div`
  display: flex;
  align-items: center;
  margin-left: 70px;
`;

const ButHold = styled.div`
  margin-right: 70px;
  display: flex;
  gap: 20px;
  align-items: center;
`;

const ISearch = styled.div``;

const Header: React.FC = () => {
  const [showProduct, setShowProduct] = useState<boolean>(false);
  const [showSolo, setShowSolution] = useState<boolean>(false);
  const [showReso, setShowReso] = useState<boolean>(false);

  const changeProductShow = () => {
    setShowProduct(!showProduct);
    setShowSolution(false);
    setShowReso(false);
  };

  const changeSolution = () => {
    setShowSolution(!showSolo);
    setShowProduct(false);
    setShowReso(false);
  };

  const changeReso = () => {
    setShowReso(!showReso);
    setShowProduct(false);
    setShowSolution(false);
  };
  return (
    <Container>
      <Hold>
        <Logo src={log} />
        <Navigations>
          <NavHold onClick={changeProductShow}>
            <Nav>Products</Nav>
            <span>
              <AiOutlineDown />
            </span>
          </NavHold>

          {showProduct ? (
            <div>
              <Product changeProductShow={changeProductShow} />
            </div>
          ) : null}

          <NavHold onClick={changeSolution}>
            <Nav>Solutions</Nav>
            <span>
              <AiOutlineDown />
            </span>
          </NavHold>
          {showSolo ? (
            <div>
              <Solo changeSolution={changeSolution} />
            </div>
          ) : null}

          <NavHold onClick={changeReso}>
            <Nav>Resource</Nav>
            <span>
              <AiOutlineDown />
            </span>
          </NavHold>
          {showReso ? (
            <div>
              <Reso changeReso={changeReso} />
            </div>
          ) : null}
        </Navigations>
      </Hold>
      <ButHold>
        <ISearch>
          {" "}
          <BsSearch />
        </ISearch>
        <Button title="try now" bg="#0054BB" cl="white" />

        <Button bg="transparent" cl="black" title="sign in" />
      </ButHold>
    </Container>
  );
};

export default Header;