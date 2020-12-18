import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import {
  FooterContainer,
  Email,
  Socials,
  FooterInfo,
  CopyrightText,
} from "./Footer.styled";
import { GemLogo } from "../../components/Logo/Logo.styled";
const Footer = () => {
  return (
      <FooterContainer>
        <FooterInfo>
          <Email>gemstones@gmail.com</Email>
          <GemLogo href="/">GEMSTONE</GemLogo>
          <Socials>
            <YouTubeIcon
                style={{ fontSize: 40, color: "red", cursor: "pointer" }}
            />
            <InstagramIcon
                style={{ fontSize: 40, color: "black", cursor: "pointer" }}
            />
            <FacebookIcon
                style={{ fontSize: 40, color: "blue", cursor: "pointer" }}
            />
          </Socials>
        </FooterInfo>
        <CopyrightText>
          Copyright © 2020 Gemstones.com - All Rights Reserved
        </CopyrightText>
      </FooterContainer>
  );
};

export default Footer;
