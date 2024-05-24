import React from "react";
import styled from "styled-components";
import {ProjectForPortfolioCard} from "./ProjectForPortfolioCard";
import photo from "../../../assets/images/cardPortfolioPicture.webp"
import {Container} from "../../../components/Container";

export const Portfolio = () => {
    return (
        <StyledPortfolio>
            <Container>
                <h2>Portfolio</h2>
                <ProjectForPortfolioCard src={photo} title="Landing Ice-cream"/>
            </Container>
        </StyledPortfolio>
    );
};

const StyledPortfolio = styled.section`
    text-align: center;

    h2 {
        padding-top: 40px;
        margin: 0;
    }
`;
