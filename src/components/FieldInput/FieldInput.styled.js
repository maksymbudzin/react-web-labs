import styled from "styled-components";
import { Input } from "antd";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  position: relative;
 
`;

export const InputStyled = styled(Input)`
  background-color : #18341F; 
  height: 3rem;
  line-height: 1.5rem;
  border: 4.5px solid #black;
  font-size: 1em;
  border-radius: 10px;
  padding: 0 28px;
  font-family: "Comic Sans MS", sans-serif
`;

export const ErrorStyled = styled.div`
  position: absolute;
  color: red;
  font-size: 12px;
  top: 83px;
  left: 20px;
  font-family: "Comic Sans MS", sans-serif
`;

export const TitleStyled = styled.div`
  margin-top: 0.8rem;
 font-family: "Comic Sans MS", sans-serif
`
