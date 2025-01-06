import styled from "styled-components";

export const OuterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 40px 20px;
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
    margin-bottom: 16px;
    margin-left: 20px;
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
  justify-content: center;
  gap: 40px;
  width: 100%;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const CoreValue = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;

  top: ${(props) => (props.isUp ? "-20px" : "0px")};
  @media (max-width: 768px) {
    top: 0;
    flex-direction: row;
    gap: 20px;
  }
`;

export const Icon = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #012dc1;
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
  margin-top: 16px;
  font-size: 20px;
  font-weight: 600;
  color: #012dc1;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-top: 0;
  }
`;

export const HorizontalLine = styled.div`
  height: 2px;
  background-color: #012dc1;
  width: ${(props) => (props.isVertical ? "2px" : "100px")};
  position: ${(props) => (props.isVertical ? "absolute" : "static")};
  top: ${(props) => (props.isVertical ? "50%" : "auto")};
  left: ${(props) => (props.isVertical ? "50%" : "auto")};
  transform: ${(props) =>
    props.isVertical ? "translate(-50%, -50%)" : "none"};

  @media (max-width: 768px) {
    width: 2px;
    height: 50px;
  }
`;
