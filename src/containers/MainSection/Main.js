import React from "react";
import {
  MainContainer,
  MainBackground,
  MainH,
  MainButtonWrapper,
  MainP,
  MainContent,
} from "./Main.styled";

import { ButtonPB } from "../../components/ButtonGreenBlack/ButtonGreenBlack.styled";

const Main = () => {
  return (
    <MainContainer>
      <MainBackground>
        <img src="/images/emerald.jpg" alt=""/>
      </MainBackground>
      <MainContent>
        <MainH>You can shop gamestones here!!</MainH>
        <MainP>
          Largest Collection of Loose Gemstones for Sale
        </MainP>
        <MainButtonWrapper>
          <ButtonPB to="/catalog" style={{ marginTop: "5.5rem" }}>
            Buy!!
          </ButtonPB>
        </MainButtonWrapper>
      </MainContent>
    </MainContainer>
  );
};

export default Main;
