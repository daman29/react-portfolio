import styled from "styled-components";
import { Pallette } from "../assets/ColourPallette";

export const NavbarContainer = styled.nav`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
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
`