
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
  background-color: #e6eaf9; /* Set the circle background color */
  color: #012dc1; /* Set the inner arrow color */
  border: 3px solid #012dc1; /* Add border with color */
  padding: 10px 20px;
  font-size: 24px;
  font-weight: bold;
  border-radius: 50%; /* Make it a perfect circle */
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
    background-color: #043eff; /* Optional hover effect */
    color: #ffffff; /* Change arrow color on hover */
  }

  &:disabled {
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    top: 30%; /* Adjust vertical position on mobile */
    padding: 8px 16px; /* Make the button smaller on mobile */
    font-size: 20px; /* Reduce the size of the arrow */
  }

  @media (max-width: 480px) {
    left: -15px;
    right: -15px;
    padding: 6px 12px; /* Further reduce button size on very small screens */
    font-size: 18px; /* Further reduce arrow size */
  }
`;
