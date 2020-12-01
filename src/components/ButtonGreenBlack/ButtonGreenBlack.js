import React from "react";
import ButtonPB from "./ButtonGreenBlack.styled";

const ButtonGreenBlack = ({ text, link }) => {
  return <ButtonPB to={link}>{text}</ButtonPB>;
};

export default ButtonGreenBlack;
