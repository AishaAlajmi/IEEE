import React from "react";
import {
  OuterContainer,
  Container,
  CoreValuesWrapper,
  CoreValue,SectionTitle, SectionArrow,
  Icon,
  CoreValueTitle,
} from "./CoreValuesStyle";
import { CoreValuesList } from "../../data/constants";
import SectionArrowImg from "../../images/Polygon 7.png";

const CoreValuesSection = () => {
  return (
    <OuterContainer>
      <Container>
        <SectionTitle>
          <SectionArrow src={SectionArrowImg} alt="Arrow Icon" />
          Core Values
        </SectionTitle>
        <CoreValuesWrapper>
          {CoreValuesList.map((value) => (
            <CoreValue key={value.id}>
              {value.title === "Creativity" || value.title === "Social Responsibility" ? (
                <CoreValueTitle>{value.title}</CoreValueTitle>
              ) : null}
              <Icon src={value.image} alt={value.title} />
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
