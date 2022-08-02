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
          <LinkTag onClick={() => handlePageChange("AboutMe")} current={currentPage === "AboutMe" ? true : false}>
            About Me
          </LinkTag>
          <LinkTag onClick={() => handlePageChange("Projects")} current={currentPage === "Projects" ? true : false}>
            Projects
          </LinkTag>
          <LinkTag onClick={() => handlePageChange("Contact")} current={currentPage === "Contact" ? true : false}>
            Contact Me
          </LinkTag>
          <LinkTag onClick={() => handlePageChange("Resume")} current={currentPage === "Resume" ? true : false}>Resume</LinkTag>
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
          <ExtendedLinkTag current={currentPage === "AboutMe" ? true : false}
            onClick={() => {
              handlePageChange("AboutMe");
              setOpenedNavbar((current) => !current);
            }}
          >
            About Me
          </ExtendedLinkTag>
          <ExtendedLinkTag current={currentPage === "Projects" ? true : false}
            onClick={() => {
              handlePageChange("Projects");
              setOpenedNavbar((current) => !current);
            }}
          >
            Projects
          </ExtendedLinkTag>
          <ExtendedLinkTag current={currentPage === "Contact" ? true : false}
            onClick={() => {
              handlePageChange("Contact");
              setOpenedNavbar((current) => !current);
            }}
          >
            Contact Me
          </ExtendedLinkTag>
          <ExtendedLinkTag openedNavbar={openedNavbar} current={currentPage === "Resume" ? true : false}
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
