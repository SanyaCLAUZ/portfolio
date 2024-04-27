import React from "react";
import styled from "styled-components";
import { Title } from "./Title";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import photo from "../../../../assets/images/IMG_7700_upscayl_4x_realesrgan-x4plus-fotor-2024042321727.webp";

export const Main = () => {
  return (
    <StyledMain>
      <FlexWrapper align={"center"} justify={"space-around"}>
        <Title />
        <StyledPhoto src={photo} alt=""/>
      </FlexWrapper>
    </StyledMain>
  );
};

const StyledMain = styled.div`
  min-height: 100vh;
  background: linear-gradient(to right, #2C2C2C, #1C1C1C);
`;

const StyledPhoto = styled.img`
width: 620px;
height: 600px;
object-fit: cover;
`;
