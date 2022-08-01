import React, { useState } from "react";
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  InnerContainer,
  ExtendedContainer,
  MenuButton,
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
          About Me{" "}
          <MenuButton
            onClick={() => {
              setOpenedNavbar((current) => !current);
            }}
          >
            {" "}
            {openedNavbar ? <>&#10005;</> : <> &#8801;</>}
          </MenuButton>
        </RightContainer>
      </InnerContainer>
      <ExtendedContainer></ExtendedContainer>
    </NavbarContainer>
  );
}

export default Header;
