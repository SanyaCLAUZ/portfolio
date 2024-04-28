import React from "react";
import styled from "styled-components";
import { Title } from "./Title";
import { FlexWrapper } from "../../../components/FlexWrapper";
import photo from "../../../assets/images/portfolioPicture.webp";

export const HomePageFirstSection = () => {
  return (
    <StyledHomePageFirstSection>
      <FlexWrapper align={"center"} justify={"space-around"}>
        <Title />
        <StyledPhoto src={photo} alt="" />
      </FlexWrapper>
    </StyledHomePageFirstSection>
  );
};

const StyledHomePageFirstSection = styled.div`
  min-height: 100vh;
  background: linear-gradient(to right, #2c2c2c, #1c1c1c);
`;

const StyledPhoto = styled.img`
scale: 70%;
  width: 620px;
  object-fit: scale-down;
`;
