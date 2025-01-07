import React, { useState, useEffect } from "react";
import {
  OuterContainer,
  Container,
  Wrapper,SectionTitle, SectionArrow,
  CardContainer,
  ArrowButton,
} from "./ProjectsStyle";
import ProjectCard from "../Cards/ProjectCards";
import { projects } from "../../data/constants";
import SectionArrowImg from "../../images/Polygon 7.png";

const Projects = ({ openModal, setOpenModal }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setVisibleCards(1);
    } else if (window.innerWidth <= 1024) {
      setVisibleCards(2);
    } else {
      setVisibleCards(3);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    if (currentIndex + visibleCards < projects.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <OuterContainer>
      <Container>
        <SectionTitle>
          <SectionArrow src={SectionArrowImg} alt="Arrow Icon" />
          Achievements
        </SectionTitle>
        <Wrapper>
          <ArrowButton onClick={handlePrev} disabled={currentIndex === 0}>
            &#8249;
          </ArrowButton>
          <CardContainer>
            {projects
              .slice(currentIndex, currentIndex + visibleCards)
              .map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                />
              ))}
          </CardContainer>
          <ArrowButton
            onClick={handleNext}
            disabled={currentIndex + visibleCards >= projects.length}
          >
            &#8250;
          </ArrowButton>
        </Wrapper>
      </Container>
    </OuterContainer>
  );
};

export default Projects;
