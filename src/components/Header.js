import React, { useState } from "react";
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  InnerContainer,
  ExtendedContainer,
  MenuButton,
  LinkTag,
} from "../styles/NavbarStyle";

function Header({ currentPage, handlePageChange }) {
  const [openedNavbar, setOpenedNavbar] = useState(false);

  return (
    <NavbarContainer>
      <InnerContainer>
        <LeftContainer>
          <h3>Hello</h3>
        </LeftContainer>
        <RightContainer>
          <LinkTag>About Me</LinkTag>
          <LinkTag>Projects</LinkTag>
          <LinkTag>Contact Me</LinkTag>
          <LinkTag>Resume</LinkTag>
          <MenuButton
            onClick={() => {
              setOpenedNavbar((current) => !current);
            }}
          >
            {openedNavbar ? <>&#10005;</> : <> &#8801;</>}
          </MenuButton>
        </RightContainer>
      </InnerContainer>
      <ExtendedContainer></ExtendedContainer>
    </NavbarContainer>
  );
}

export default Header;
