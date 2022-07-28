import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import AboutMe from "../pages/AboutMe";
import Contact from "../pages/Contact";
import Resume from "../pages/Resume";
import Projects from "../pages/Projects";

export default function MainContainer() {
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
}
