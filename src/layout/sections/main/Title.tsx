import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {theme} from "../../../styles/Theme";

export const Title = () => {
    return (
        <StyledTitle>
                <SmallText>HELLO</SmallText>
                <TitleName>I'M ALEX LENDIEL</TitleName>
                <HomePageParagraph>
                    I've been doing web design, front-end and back-end development for a
                    year now. Do you need a website design, site layout, or maybe a turnkey
                    website? Then contact me
                </HomePageParagraph>
                <Link to="/contact">
                    <ContactMeButton>CONTACT ME</ContactMeButton>
                </Link>
        </StyledTitle>
    );
};
const SmallText = styled.span`
    font-size: 48px;
    font-weight: 600;
    text-align: left;
`
const TitleName = styled.h2`
    font-size: 72px;
    font-weight: 700;
    text-align: left;
    margin-top: 27px;
`
const HomePageParagraph = styled.p`
    font-size: 18px;
    font-weight: 100;
    text-align: left;
    margin: 27px 0;
`
const StyledTitle = styled.div`
    max-width: 40%;
`;

const ContactMeButton  = styled.button`
    height: 47px;
    font-family: "Jersey15-Regular", sans-serif;
    font-optical-sizing: auto;
    font-weight: 500;
    background-color: ${"#e2a300"};
    font-size: 20px;
    border: none;
    border-radius: 6px;
    padding: 10px;
    box-shadow: 1px 1px 10px rgba(226, 163, 0, 0.58);
    transition: 0.5s;
    
    &:hover{
        background-color: ${theme.colors.text};
        cursor: pointer;
    }
`
