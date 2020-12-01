import styled from "styled-components";

export const Item = styled.div`
  display: flex;
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  justify-content: center;
`;
export const Image = styled.img`
  max-width: 200px;
  max-height: 200px;
`;
export const Title = styled.h2`
  width: 100%;
  text-align: center;
   
`;

export const Description = styled.p`
  margin: 1rem 0;
`;
export const PriceFrom = styled.a`
 font-size: 85%;
  text-decoration: none;
  background: black;
  color: #ffffff;
  cursor: pointer;
  padding: 1rem;
  border: 0;
  border-radius: 10px;
  width: auto;
  position: relative;
  &::before {
    
  }
  &::after {
    content: " $";
  }
  &:hover {
    background: #204127;
    border-radius: 10px;
  }
`;
