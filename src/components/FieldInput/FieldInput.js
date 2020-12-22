import React from "react";
import { ErrorStyled, InputContainer, InputStyled, TitleStyled } from "./FieldInput.styled";
import { Field, ErrorMessage } from "formik";

const InputComponent = ({ title, name, type }) => {
  return (
    <InputContainer>
        <TitleStyled>{title}:</TitleStyled>
      <Field id={name} name={name} type={type} as={InputStyled} />
      <ErrorStyled>
        <ErrorMessage name={name} />
      </ErrorStyled>
    </InputContainer>
  );
};

export default InputComponent;
