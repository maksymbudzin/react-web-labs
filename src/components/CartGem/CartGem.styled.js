import styled from "styled-components";

export const Item = styled.div`
  width: 275px;
  border: 6px solid black;
  border-radius: 3rem;
  opacity: 1;
  color: white;
  display: flex;
  justify-content: space-between;
  margin: 2rem 2rem 2.5rem 5rem;
`;
export const GemstoneImage = styled.img`
   width: 70%;
  align-self: center;
  margin-left: 4rem;
`;
export const Title = styled.h2`
  font-size: 150%;
  margin-left: 6rem;
  font-family: "Comic Sans MS", sans-serif;
`;
export const Price = styled.p`
  font-size: 150%;
  opacity: 100%;
  margin-top: 0rem;
  color : darkgreen;
  margin-left: 6rem; 
  font-family: "Comic Sans MS", sans-serif;
`;
export const Weight = styled.p`
  font-size: 150%;
  opacity: 85%;
  margin-top: 0rem;
  margin-left: 6rem;
  font-family: "Comic Sans MS", sans-serif;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  margin: 1rem 4rem 1rem 0;
  font-family: "Comic Sans MS", sans-serif;
`;