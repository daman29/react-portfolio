import React from "react";
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  InnerContainer,
  ExtendedContainer,
} from "../styles/NavbarStyle";

function Header({ currentPage, handlePageChange }) {
  return (
    <NavbarContainer>
      <InnerContainer>
        <LeftContainer>
          <h3>Hello</h3>
        </LeftContainer>
        <RightContainer>About Me</RightContainer>
      </InnerContainer>
      <ExtendedContainer></ExtendedContainer>
    </NavbarContainer>
  );
}

export default Header;
