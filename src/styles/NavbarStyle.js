import styled from "styled-components";
import { Pallette } from "../assets/ColourPallette";

export const NavbarContainer = styled.nav`
  width: 100%;
  min-height: 80px;
  display: flex;
  justify-content: center;
  background-color: ${Pallette.primary};
  color: white;
`;

export const ContentContainer = styled.div`
  width: 100%;
  max-width: 1500px;
  min-height: 80px;
  display: flex;
  flex-direction: column;
`;

export const LeftContainer = styled.div`
  flex: 40%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 3%;
  @media (max-width: 700px) {
    flex: 90%;
  }
`;

export const RightContainer = styled.div`
  flex: 60%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-right: 3%;
  @media (max-width: 700px) {
    justify-content: flex-end;
    flex: 10%;
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
  position: absolute;
  width: 100%;
  top: 80px;
  background-color: ${Pallette.primary};
  opacity: 90%;
  z-index: 99;

  @media (min-width: 700px) {
    display: none;
  }
`;

export const LinkTag = styled.a`
  text-decoration: none;
  font-size: large;
  cursor: pointer;
  ${(props) =>
    props.current ? `color: ${Pallette.selected}; font-weight: bold;` : ``}
  @media (max-width: 700px) {
    display: none;
  }
`;

export const ExtendedLinkTag = styled.a`
  text-decoration: none;
  cursor: pointer;
  font-size: large;
  margin-bottom: ${(props) => (props.openedNavbar ? "2%" : 0)};
  ${(props) =>
    props.current ? `color: ${Pallette.selected}; font-weight: bold;` : ``}
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
