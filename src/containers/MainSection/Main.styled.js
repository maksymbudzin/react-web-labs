import styled from "styled-components";

export const HeroContainer = styled.div`
  background-image: url("sre/videos/emerald.jpg") ;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 670px;
  position: relative;
`;


export const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;


export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
    
`;
export const HeroH1 = styled.h1`
  color: #101010;
  font-size: 50px;
  text-align: center;
  font-weight: 800;
  font-family: "Comic Sans MS", sans-serif ;
   text-shadow: rgb(71, 71, 71) -3px -5px 2px;
  --darkreader-inline-color: #ffffff;
  --darkreader-inline-bgimage: initial;
  --darkreader-inline-bgcolor: #825f5f;
  text-align: center;
  font-weight: bold;
   
`;
export const HeroP = styled.p`
  color: #ffffff;
  font-size: 31px;
  margin-top: 6%;
  max-width: 50%;
  color: rgb(255, 255, 255);
  text-shadow: rgb(71, 71, 71) -3px -5px 2px;
  --darkreader-inline-color: #ffffff;
  --darkreader-inline-bgimage: initial;
  --darkreader-inline-bgcolor: #825f5f;
  text-align: center;
  font-weight: bold;
`;
export const HeroButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Comic Sans MS", sans-serif ;
`;