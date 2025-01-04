import React, { useState } from "react";
import {
  HeroContainer,
  HeroInnerContainer,
  HeroLeftContainer,
  HeroRightContainer,
  Title,
  SubTitle,
  GalleryContainer,
  ImageWrapper,
  ArrowButton,
} from "./HeroStyle";
import { Bio, Gallary } from "../../data/constants";

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === Gallary.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Gallary.length - 1 : prevIndex - 1
    );
  };

  return (
    <div id="about">
      <HeroContainer>
        <HeroInnerContainer>
          {/* Left Section for the Gallery Slider */}
          <HeroLeftContainer>
            <GalleryContainer>
              <ArrowButton onClick={handlePrev}>&#8249;</ArrowButton>
              <ImageWrapper>
                <img
                  src={Gallary[currentIndex].image}
                  alt={`Slide ${currentIndex + 1}`}
                />
              </ImageWrapper>
              <ArrowButton onClick={handleNext}>&#8250;</ArrowButton>
            </GalleryContainer>
          </HeroLeftContainer>

          {/* Right Section for Title and Description */}
          <HeroRightContainer>
            <Title>{Bio.name}</Title>
            <SubTitle>{Bio.description}</SubTitle>
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;
