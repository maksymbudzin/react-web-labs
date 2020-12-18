import styled from "styled-components";

export const GemstoneBlock = styled.div`
  display: flex;
  background-image: url("/images/fon-zelenyi-podsvetka-kamen.jpg");
  justify-content: space-between;
  color: white;
  margin: 2.75rem 6rem 6rem 6rem;
  flex-wrap: wrap;
  background-image: darkgreen;
  
`;
export const GemstoneImage = styled.img`
  margin-left: 70px;
  margin-top: 74px;
  width: 300px;
  height: 200px;
`;
export const GemstoneTextInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 25rem;
  margin-top: 60px;
  
`;
export const GemstoneName = styled.h2`
font-family: "Comic Sans MS", sans-serif`;
export const GemstonePrice = styled.h2`
font-family: "Comic Sans MS", sans-serif`;
export const GemstoneWeight = styled.h2`
font-family: "Comic Sans MS", sans-serif
  margin-bottom: 5.5rem;
  margin-top: 0.5rem;
`;
export const GemstoneDescription = styled.p`
  font-size: 125%;
  margin-top: 1.75rem;
  font-family: "Comic Sans MS", sans-serif;
`;
export const ReadMore = styled.span`
  color: darkgreen;
  opacity: 0.75;

  margin-left: 0.5rem;
  cursor: pointer;
`;
