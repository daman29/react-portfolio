import React from "react";
import {NavbarContainer, LeftContainer, RightContainer} from '../styles/NavbarStyle'

function Header({ currentPage, handlePageChange }) {
  return (
    <NavbarContainer>
      <LeftContainer>
        <h3>Hello</h3>
      </LeftContainer>
      <RightContainer>
        About Me
      </RightContainer>
    </NavbarContainer>
  );
}

export default Header;
