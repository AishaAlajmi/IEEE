
import styled from 'styled-components';
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
  padding: 40px 20px;

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
  align-self: flex-start;
  margin-left: 100px;

  @media (max-width: 768px) {
    font-size: 32px;
    margin-left: 20px; /* Reduce margin for smaller screens */
    text-align: center; /* Center the title */
    align-self: center;
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
    flex-direction: column; /* Stack arrows and content vertically */
    gap: 20px; /* Add space between elements */
    padding: 10px 0; /* Reduce padding on mobile */
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

  @media (max-width: 768px) {
    gap: 16px; /* Reduce gap on smaller screens */
    flex-wrap: wrap; /* Allow cards to wrap */
  }
`;

export const ArrowButton = styled.button`
  background-color: #012dc1;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 24px;
  font-weight: bold;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  margin: 0 12px;

  &:hover {
    background-color: #043eff;
  }

  &:disabled {
    cursor: not-allowed;
    background-color: #ccc;
  }

  @media (max-width: 768px) {
    margin: 0 0; /* Remove horizontal margin */
    width: 40px; /* Smaller buttons for mobile */
    height: 40px;
  }
`;
