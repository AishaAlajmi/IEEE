
import styled from 'styled-components';
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
align-items: center; /* Align arrow and text vertically */
font-size: 42px;
font-weight: 600;
margin-bottom: 20px;
color: #012DC1;
align-self: flex-start;
margin-left: 100px; /* Increased margin to move it further to the right */

@media (max-width: 768px) {
  font-size: 32px;
  margin-bottom: 16px;
  margin-left: 60px; /* Adjust for smaller screens */
}
`;

export const TitleArrow = styled.span`
display: inline-block;
font-size: 36px;
margin-right: 12px; /* Spacing between the arrow and the text */
color: #012DC1;

@media (max-width: 768px) {
  font-size: 28px; /* Smaller arrow size for smaller screens */
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
  
  }
`;
