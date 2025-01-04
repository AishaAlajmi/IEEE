
import styled from 'styled-components';

export const OuterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 40px 20px;
  
`;

export const Container = styled.div`
  background: #E6EAF9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1400px;
  border-radius: 16px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  padding: 40px 0;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  font-size: 42px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #012DC1;
  align-self: flex-start;
  margin-left: 100px;

  @media (max-width: 768px) {
    font-size: 32px;
    margin-left: 60px;
  }
`;

export const TitleArrow = styled.span`
  display: inline-block;
  font-size: 36px;
  margin-right: 12px;
  color: #012DC1;

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
  margin: 0 12px;

  &:hover {
    background-color: #043EFF;
  }

  &:disabled {
    cursor: not-allowed;
    background-color: #ccc;
  }

  @media (max-width: 768px) {
    margin: 0 24px;
  }

  @media (max-width: 480px) {
    margin: 0 32px;
  }
`;