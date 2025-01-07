import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { darkTheme, lightTheme } from "./utils/Themes.js";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ProjectDetails from "./components/ProjectDetails";
import Committees from "./components/Committees"; // Import Committees component
import CoreValues from "./components/CoreValues"; // Import Committees component
import styled from "styled-components";

// Define Body wrapper for the outer background
const Body = styled.div`
  background-color: #011762; /* Matches the dark navy blue */
  width: 100%;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
`;

// Define SectionWrapper for the inner content
const SectionWrapper = styled.div`
  background-color: #e6eaf9; /* Inner content background color */
  width: 100%;
  padding: 60px 20px; /* Add padding for spacing within sections */
  margin: 0 auto; /* Center the section */
  max-width: 1200px; /* Restrict the content width */
      border-radius: 16px;

`;

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <Navbar />
        <Body>
          <SectionWrapper>
            <HeroSection />
            <CoreValues />
             <Projects openModal={openModal} setOpenModal={setOpenModal} />
            <Committees />
          </SectionWrapper>
          <Footer />
          {openModal.state && (
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          )}
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
