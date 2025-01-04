import styled from "styled-components";

export const ArrowButton = styled.button`
  background-color: #012dc1;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 24px;
  font-weight: bold;
  border-radius: 50%;
  cursor: pointer;
  position: absolute; /* Use absolute positioning for arrows */
  top: 45%; /* Move the arrow slightly up */
  transform: translateY(-50%); /* Adjust for perfect vertical centering */
  z-index: 2;

  &:first-child {
    left: -20px; /* Position the left arrow */
  }

  &:last-child {
    right: -20px; /* Position the right arrow */
  }

  &:hover {
    background-color: #043eff;
  }

  &:disabled {
    cursor: not-allowed;
    background-color: #ccc;
  }

  @media (max-width: 768px) {
    top: 30%; /* Keep the arrow slightly higher on mobile too */
    &:first-child {
      left:5px; /* Adjust left arrow position */
    }
    &:last-child {
      right: 5px; /* Adjust right arrow position */
    }
  }
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1350px;
  padding: 10px 0px 100px 0;
  gap: 12px;

  @media (max-width: 768px) {
    flex-direction: row; /* Ensure items are in a row */
    justify-content: space-between; /* Arrows stay left and right */
  }
`;

export const CardContainer = styled.div`
  display: flex;
  gap: 28px;
  overflow: hidden;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const OuterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 40px 20px;
`;

export const Container = styled.div`
  background: #e6eaf9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1400px;
  border-radius: 16px;
  padding: 40px 0;

  @media (max-width: 768px) {
    padding: 20px 10px; /* Reduce padding on smaller screens */
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  font-size: 42px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #012dc1;
  text-align: center; /* Center the title */

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const TitleArrow = styled.span`
  display: inline-block;
  font-size: 36px;
  margin-right: 12px;
  color: #012dc1;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const HeroContainer = styled.div`
  background: #e6eaf9;
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  z-index: 1;
  @media (max-width: 960px) {
    padding: 66px 16px;
  }
  @media (max-width: 640px) {
    padding: 32px 16px;
  }
`;export const HeroInnerContainer = styled.div`
display: flex;
justify-content: center; /* Keeps the alignment centered */
align-items: center;
width: 100%;
max-width: 1100px;
gap: 30px; /* Add a small amount of space between containers */

@media (max-width: 960px) {
  flex-direction: column; /* Stack content and gallery for smaller screens */
  text-align: center;
  gap: 20px; /* Slight gap for smaller screens */
}
`;

export const HeroLeftContainer = styled.div`
flex: 1;
display: flex;
justify-content: flex-end; /* Align the gallery closer to the content */
align-items: center;

@media (max-width: 960px) {
  justify-content: center; /* Center alignment for smaller screens */
}
`;

export const HeroRightContainer = styled.div`
flex: 1;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
text-align: left;

@media (max-width: 960px) {
  align-items: center; /* Center content for smaller screens */
  text-align: center; /* Align text to the center */
}
`;

export const SubTitle = styled.div`
  font-size: 18px;
  line-height: 1.6;
  color: #021f87;

  @media (max-width: 960px) {
    font-size: 16px;
  }
`;

export const GalleryContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  max-width: 500px;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 94px;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
  }
`;
