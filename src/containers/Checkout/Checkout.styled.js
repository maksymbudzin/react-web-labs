import styled from "styled-components";
import {Form} from "formik";

export const FormContainer = styled.section`
  color: white;
  display: flex;
  flex-direction: column;
 
`;


export const FormStyled = styled(Form)``;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "OpenSans-Light";
`;

export const InputComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  position: relative;
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin-left: 42rem;
  margin-top: 1.72rem;
`;

export const FormBackground = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;



