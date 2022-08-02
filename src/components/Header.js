import React, { useState } from "react";
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  InnerContainer,
  ExtendedContainer,
  MenuButton,
  LinkTag,
  ExtendedLinkTag,
} from "../styles/NavbarStyle";

function Header({ currentPage, handlePageChange }) {
  const [openedNavbar, setOpenedNavbar] = useState(false);

  return (
    <NavbarContainer >
      <InnerContainer>
        <LeftContainer>
          <h2>Damneet Sambhy</h2>
        </LeftContainer>
        <RightContainer>
          <LinkTag onClick={() => handlePageChange("AboutMe")}>
            About Me
          </LinkTag>
          <LinkTag onClick={() => handlePageChange("Projects")}>
            Projects
          </LinkTag>
          <LinkTag onClick={() => handlePageChange("Contact")}>
            Contact Me
          </LinkTag>
          <LinkTag onClick={() => handlePageChange("Resume")}>Resume</LinkTag>
          <MenuButton
            onClick={() => {
              setOpenedNavbar((current) => !current);
            }}
          >
            {openedNavbar ? <>&#10005;</> : <> &#8801;</>}
          </MenuButton>
        </RightContainer>
      </InnerContainer>
      {openedNavbar && (
        <ExtendedContainer >
          <ExtendedLinkTag 
            onClick={() => {
              handlePageChange("AboutMe");
              setOpenedNavbar((current) => !current);
            }}
          >
            About Me
          </ExtendedLinkTag>
          <ExtendedLinkTag
            onClick={() => {
              handlePageChange("Projects");
              setOpenedNavbar((current) => !current);
            }}
          >
            Projects
          </ExtendedLinkTag>
          <ExtendedLinkTag
            onClick={() => {
              handlePageChange("Contact");
              setOpenedNavbar((current) => !current);
            }}
          >
            Contact Me
          </ExtendedLinkTag>
          <ExtendedLinkTag openedNavbar={openedNavbar}
            onClick={() => {
              handlePageChange("Resume");
              setOpenedNavbar((current) => !current);
            }}
          >
            Resume
          </ExtendedLinkTag>
        </ExtendedContainer>
      )}
    </NavbarContainer>
  );
}

export default Header;
