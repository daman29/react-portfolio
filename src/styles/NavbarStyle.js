import styled from "styled-components";
import { Pallette } from "../assets/ColourPallette";

export const NavbarContainer = styled.nav`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: column;
  background-color: ${Pallette.primary};
  color: white;
`;

export const LeftContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: space-between;
  padding-left: 3%;
`;

export const RightContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  padding-right: 5%;
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
  @media (min-width: 700px) {
    display: none;
  }
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
