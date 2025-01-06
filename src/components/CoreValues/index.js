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
          {CoreValuesList.map((value) => (
            <CoreValue key={value.id}>
              {/* Show the title above only for "Creativity" and "Social Responsibility" */}
              {value.title === "Creativity" || value.title === "Social Responsibility" ? (
                <CoreValueTitle>{value.title}</CoreValueTitle>
              ) : null}
              <Icon src={value.image} alt={value.title} />
              {/* Show the title below for "Continuous Evolution" and "Collaboration" */}
              {value.title === "Continuous Evolution" || value.title === "Collaboration" ? (
                <CoreValueTitle>{value.title}</CoreValueTitle>
              ) : null}
            </CoreValue>
          ))}
        </CoreValuesWrapper>
      </Container>
    </OuterContainer>
  );
};

export default CoreValuesSection;
