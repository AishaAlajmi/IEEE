import React from "react";
import {
  OuterContainer,
  Container,
  Title,
  SectionArrow,
  CoreValuesWrapper,
  CoreValue,
  Icon,
  CoreValueTitle,
  HorizontalLine,
} from "./CoreValuesStyle";
import { CoreValuesList } from "../../data/constants";
import SectionArrowImg from "../../images/Polygon 7.png";

const CoreValuesSection = () => {
  return (
    <OuterContainer>
      <Container>
        <Title>
          <SectionArrow src={SectionArrowImg} alt="Arrow Icon" />
          Core Values
        </Title>
        <CoreValuesWrapper>
          {CoreValuesList.map((value, index) => (
            <React.Fragment key={value.id}>
              <CoreValue isUp={index === 1 || index === 3}>
                <Icon src={value.image} alt={value.title} />
                <CoreValueTitle>{value.title}</CoreValueTitle>
              </CoreValue>
              {index !== CoreValuesList.length - 1 && (
                <HorizontalLine isVertical={window.innerWidth <= 768} />
              )}
            </React.Fragment>
          ))}
        </CoreValuesWrapper>
      </Container>
    </OuterContainer>
  );
};

export default CoreValuesSection;
