import React from "react";
import styled from "styled-components";
import { Title } from "./Title";
import { FlexWrapper } from "../../../components/FlexWrapper";
import photo from "../../../assets/images/portfolioPictureWithHeigh.webp";

export const HomePageFirstSection = () => {
  return (
    <StyledHomePageFirstSection>
      <FlexWrapper align={"center"} justify={"center"}>
        <Title />
        <StyledPhoto src={photo} alt="" />
      </FlexWrapper>
    </StyledHomePageFirstSection>
  );
};

const StyledHomePageFirstSection = styled.section`
  height: 100vh;
`;

const StyledPhoto = styled.img`
    height: 670px;
    width: 620px;
    object-fit: scale-down;
    background-image: url('data:image/svg+xml,<svg width="879" height="880" viewBox="0 0 879 880" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(%23filter0_d_4_6744)"><circle cx="439.5" cy="439.972" r="254" stroke="%2300C4F0" stroke-width="67" shape-rendering="crispEdges"/></g><defs><filter id="filter0_d_4_6744" x="0" y="0.47229" width="879" height="879" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="76"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.768627 0 0 0 0 0.941176 0 0 0 0.42 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4_6744"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4_6744" result="shape"/></filter></defs></svg>');
    background-position: bottom ;
    background-repeat: no-repeat;
    background-size: 500px;
`;
