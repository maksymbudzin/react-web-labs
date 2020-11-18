import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: #356644;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  font-size: 1.1rem;
  top: 0;
  z-index: 10;
  border-bottom: 0.005rem solid white;
  
`;
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  width: 100%;
  padding: 0 24px;
  
`;

export const NavLogo = styled(LinkR)`
  
  text-decoration: none;
  color: #ffffff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 2.2rem;
  align-items: center;
  margin-left: 3rem;
  font-family: "Comic Sans MS", sans-serif ;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  color: #ffffff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 3rem;
  cursor: pointer;
  height: 100%;
  &.active {
    border-bottom: 3px solid #18341F ;
  }
  &:hover {
    background-color: #18341F;
    
  }
  font-family: "Comic Sans MS", sans-serif
`;

export const UserOptions = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin-right: 3rem;
`;