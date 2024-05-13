import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { ProjectForPortfolioCard } from "./ProjectForPortfolioCard";
import photo from "../../../assets/images/cardPortfolioPicture.webp"

export const Portfolio = () => {
  return (
    <StyledPortfolio>
      <h2>Portfolio</h2>
      <ProjectForPortfolioCard src = {photo} title="Landing Ice-cream"/>
    </StyledPortfolio>
  );
};

const StyledPortfolio = styled.div`
    text-align: center;
    padding-bottom: 50px;
    background: linear-gradient(to right, #2C2C2C, #1C1C1C);
    h2 {
        padding-top: 40px;
        margin: 0;
    }
`;
