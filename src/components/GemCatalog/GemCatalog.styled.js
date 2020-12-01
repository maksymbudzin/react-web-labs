import styled from "styled-components";
import { ButtonPB } from "../ButtonGreenBlack/ButtonGreenBlack.styled";

export const Item = styled.div`
  width: 275px;
  border: 6px solid black;
  border-radius: 3rem;
  background: 18341A;
  opacity: 1;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 1.5rem;
`;
export const GemstoneImage = styled.img`
  width: 70%;
  align-self: center;
`;
export const Title = styled.h2`
  margin: 0 0 0.5rem 5rem;
`;
export const Price = styled.p`
  opacity: 85%;
`;
export const Weight = styled.p`
  opacity: 85%;
  margin-left: 4.7rem;
`;
export const ItemButton = styled(ButtonPB)`
  font-size: 1rem;
  padding: 0.75rem 1rem;
  border-radius: 6px;
  margin-left: -1rem;
`;

export const Options = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 0 0 1.25rem 1.25rem;
`;
export const Info = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 0 0.5rem 2.5rem;
`;
