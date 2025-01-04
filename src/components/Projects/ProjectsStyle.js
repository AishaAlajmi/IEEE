import styled from 'styled-components';



export const Container = styled.div`
  background: #E6EAF9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 40px 0;
  width: 100%;
  max-width: 1400px; /* Optional for central alignment */
  border-radius: 16px; /* Optional for rounded container look */

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


export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1350px;
  padding: 10px 0px 100px 0;
  gap: 12px;
`;

export const CardContainer = styled.div`
  display: flex;
  gap: 28px;
  overflow: hidden;
  flex-wrap: nowrap; /* Ensures that cards are in a single row */
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const ArrowButton = styled.button`
  background-color: #012DC1;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 24px;
  font-weight: bold;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  z-index: 10;
  margin: 0 12px; /* Default margin between the button and container */

  &:hover {
    background-color: #043EFF;
  }

  &:disabled {
    cursor: not-allowed;
    background-color: #ccc;
  }

  @media (max-width: 768px) {
    margin: 0 24px; /* Add more space on smaller screens */
  }

  @media (max-width: 480px) {
    margin: 0 32px; /* Add even more space for very small screens */
  }
`;
