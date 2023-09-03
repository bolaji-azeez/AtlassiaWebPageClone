import { FC } from "react";
import styled from "@emotion/styled";

interface Iprops {
  avater: any;
  title: string;
  text: string;
}
const Pro = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  gap: 10px;
`;

const H1 = styled.h4`
  display: flex;
  flex-direction: column;

  span {
    font-weight: 500;
    font-size: 14px;
  }
`;
const ImageHold = styled.div`
  height: 60px;
  width: 60px;
  background-color: #cecece;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    cursor: pointer;
    background-color: white;
    border: 1px solid silver;
  }
`;

const Image = styled.img`
  width: 40px;
`;

export const WorkProps: FC<Iprops> = ({ avater, title, text }) => {
  return (
    <Pro>
      <ImageHold>
        <Image src={avater} />
      </ImageHold>

      <H1>
        {title}
        <span>{text}</span>
      </H1>
    </Pro>
  );
};