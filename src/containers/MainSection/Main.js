import React from "react";
import {
  HeroContainer,
  HeroBackground,
  HeroH1,
  HeroButtonWrapper,
  HeroP,
  HeroContent,
} from "./Main.styled";

import { ButtonPB } from "../../components/ButtonGreenBlack/ButtonGreenBlack.styled";

const Main = () => {
  return (
      <HeroContainer>
        <HeroBackground>
          <img src="/images/emerald.jpg" alt=""/>
        </HeroBackground>
        <HeroContent>
          <HeroH1>You can shop gemstones here!!</HeroH1>
          <HeroP>
            Largest Collection of Loose Gemstones for Sale
          </HeroP>
          <HeroButtonWrapper>
            <ButtonPB to="/catalog" style={{ marginTop: "5.5rem" }}>
              Buy!!
            </ButtonPB>
          </HeroButtonWrapper>
        </HeroContent>
      </HeroContainer>
  );
};

export default Main;
