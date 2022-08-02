import styled from "styled-components";
import { Pallette } from "../assets/ColourPallette";

export const NavbarContainer = styled.nav`
  width: 100%;
  height: ${(props) => (props.openedNavbar ? "100vh" : "80px")};
  display: flex;
  flex-direction: column;
  background-color: ${Pallette.primary};
  color: white;

  @media (min-width: 700px) {
    height: 80px;
  }
`;

export const LeftContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 3%;
`;

export const RightContainer = styled.div`
  flex: 70%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-right: 3%;
  @media (max-width: 700px) {
    justify-content: flex-end;
  }
`;

export const InnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
`;

export const ExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;

  @media (min-width: 700px) {
    display: none;
  }
`;

export const LinkTag = styled.a`
  text-decoration: none;
  cursor: pointer;
  @media (max-width: 700px) {
    display: none;
  }
`;

export const ExtendedLinkTag = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

export const MenuButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: white;
  font-size: 45px;
  cursor: pointer;
  @media (min-width: 700px) {
    display: none;
  }
`;
