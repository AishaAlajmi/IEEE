
import React, { useState, useEffect } from "react";
import {
  OuterContainer,
  Container,
  Wrapper,
  Title,
  CardContainer,
  ArrowButton,
  TitleArrow,
} from "./CommittesStyle";
import CommitteeCard from "../Cards/CommitteesCards";
import { Committees } from "../../data/constants";

const CommitteesSection = ({ openModal, setOpenModal }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3); // Default to 3 cards

  // Adjust visibleCards based on screen width
  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setVisibleCards(1); // Mobile: 1 card
    } else if (window.innerWidth <= 1024) {
      setVisibleCards(2); // Tablet: 2 cards
    } else {
      setVisibleCards(3); // Desktop: 3 cards
    }
  };

  // Add resize event listener
  useEffect(() => {
    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Move to the next set of committees
  const handleNext = () => {
    if (currentIndex + visibleCards < Committees.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Move to the previous set of committees
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <OuterContainer>
      <Container>
        <Title>
          <TitleArrow>&#9664;</TitleArrow> Committees
        </Title>
        <Wrapper>
          <ArrowButton onClick={handlePrev} disabled={currentIndex === 0}>
            &#8249;
          </ArrowButton>
          <CardContainer>
            {Committees.slice(currentIndex, currentIndex + visibleCards).map(
              (committee) => (
                <CommitteeCard
                  key={committee.id}
                  committee={committee}
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                />
              )
            )}
          </CardContainer>
          <ArrowButton
            onClick={handleNext}
            disabled={currentIndex + visibleCards >= Committees.length}
          >
            &#8250;
          </ArrowButton>
        </Wrapper>
      </Container>
    </OuterContainer>
  );
};

export default CommitteesSection;
