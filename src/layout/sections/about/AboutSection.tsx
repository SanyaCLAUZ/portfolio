import React from "react";
import styled from "styled-components";
import iconsSprite from "../../../assets/images/code-svg.svg";
import { FlexWrapper } from "../../../components/FlexWrapper";

type AboutSectionProps = {
  backgroundSrc: string;
};

export const AboutSection = (props: AboutSectionProps) => {
  return (
      <StyledAbout backgroundSrc={props.backgroundSrc}>
        <h2>About me</h2>
      </StyledAbout>
  );
};

const StyledAbout = styled.div<AboutSectionProps>`
  height: 100vh;
  text-align: center;
  background: linear-gradient(to right, #414141, #2d2d2d);
  h2{
    margin: 0;
  }
  //background-image: url('data:image/svg+xml,<svg width="900" height="auto" viewBox="0 0 1920 1847" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(%23filter0_d_4_6679)"><circle cx="466" cy="506" r="351.5" stroke="%23E4E4E4" stroke-width="89" shape-rendering="crispEdges"/></g><g filter="url(%23filter1_d_4_6679)"><circle cx="1050" cy="784" r="215.5" stroke="%2300C4F0" stroke-width="55" shape-rendering="crispEdges"/></g><g filter="url(%23filter2_d_4_6679)"><circle cx="1116" cy="244" r="161" stroke="%23E2A200" stroke-width="34" shape-rendering="crispEdges"/></g><defs><filter id="filter0_d_4_6679" x="0" y="44" width="932" height="932" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="35"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4_6679"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4_6679" result="shape"/></filter><filter id="filter1_d_4_6679" x="737" y="475" width="626" height="626" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="35"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.756863 0 0 0 0 0.92549 0 0 0 0.25 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4_6679"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4_6679" result="shape"/></filter><filter id="filter2_d_4_6679" x="868" y="0" width="496" height="496" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="35"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0.886275 0 0 0 0 0.635294 0 0 0 0 0 0 0 0 0.25 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4_6679"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4_6679" result="shape"/></filter></defs></svg>');
`;
