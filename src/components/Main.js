import React, { useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import { AboutMe } from "../pages/AboutMe";
import { Contact } from "../pages/Contact";
import { Resume } from "../pages/Resume";
import { Projects } from "../pages/Projects";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
`;

function MainContainer() {
  const [currentPage, setCurrentPage] = useState("AboutMe");

  const renderPage = () => {
    if (currentPage === "AboutMe") {
      return <AboutMe />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    return <Projects />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <Container>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </Container>
  );
}

export default MainContainer;
