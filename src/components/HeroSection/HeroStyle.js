import styled from "styled-components";

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
`; export const HeroInnerContainer = styled.div`
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

export const Title = styled.div`
  font-weight: 700;
  font-size: 40px;
  color: #021f87;
  line-height: 1.2;
  margin-bottom: 8px; /* Reduced margin between title and subtitle */

  @media (max-width: 960px) {
    font-size: 32px;
    line-height: 1.2;
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

export const ArrowButton = styled.button`
  background: #021f87;
  color: white;
  border: none;
  border-radius: 50%;
  padding: 15px;
  cursor: pointer;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background 0.3s ease;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;

  &:first-child {
    left: -15px; /* Half inside the image */
  }

  &:last-child {
    right: -15px; /* Half inside the image */
  }

  &:hover {
    background: #043eff;
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;
