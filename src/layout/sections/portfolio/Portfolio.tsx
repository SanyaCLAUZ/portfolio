import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { ProjectForPortfolioCard } from "./ProjectForPortfolioCard";

export const Portfolio = () => {
  return (
    <StyledPortfolio>
      <h2>Portfolio</h2>
      <ProjectForPortfolioCard />
    </StyledPortfolio>
  );
};

const StyledPortfolio = styled.div`
  text-align: center;
  h2 {
    margin: 0;
  }
`;
