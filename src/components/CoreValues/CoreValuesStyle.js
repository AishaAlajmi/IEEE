import styled from "styled-components";

export const OuterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 40px 20px;
`;
export const SectionTitle = styled.div`
  display: flex;
  align-items: center;
  font-size: 42px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #021f87; /* Change the color to match your theme */
  align-self: flex-start;
  margin-left: 100px;

  @media (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 16px;
    margin-left: 20px; /* Move to the left on smaller screens */
  }
`;

export const SectionArrow = styled.img`
  width: 20px;
  height: auto;
  margin-right: 12px;

  @media (max-width: 768px) {
    width: 30px;
  }
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
  padding: 40px 20px;

  @media (max-width: 768px) {
    padding: 20px 10px;
  }
`;

export const CoreValuesWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 50%; /* Place the line in the center of the images */
    left: 10%; /* Start slightly after the first image */
    right: 10%; /* End slightly before the last image */
    height: 2px;
    background-color: #011762;
    z-index: 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 40px;

    &::before {
      content: none; /* Hide the line for smaller screens */
    }
  }
`;

export const CoreValue = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    flex-direction: row;
    gap: 20px;
  }
`;

export const Icon = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  object-fit: contain;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;

export const CoreValueTitle = styled.div`
  margin-top: ${(props) => (props.isAbove ? "-50px" : "16px")}; /* Move Creativity and Social Responsibility above */
  font-size: 20px;
  font-weight: 600;
  color: #012dc1;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-top: ${(props) => (props.isAbove ? "-40px" : "0")};
  }
`;
