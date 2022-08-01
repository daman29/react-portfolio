import React from "react";
import styled from "styled-components";
import { Pallette } from "../assets/ColourPallette";

const NavbarContainer = styled.nav`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  background-color: black;
  color: white;
`;

function Header({ currentPage, handlePageChange }) {
  return (
    <NavbarContainer>
      <h3>Hello</h3>
    </NavbarContainer>
  );
}

export default Header;
