import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {theme} from "../../../styles/Theme";

export const Title = () => {
    return (
        <StyledTitle>
                <h2>Hello</h2>
                <h1>I'M ALEX LENDIEL</h1>
                <p>
                    I've been doing web design, front-end and back-end development for a
                    year now. Do you need a website design, site layout, or maybe a turnkey
                    website? Then contact me
                </p>
                <Link to="/contact">
                    <button>CONTACT ME</button>
                </Link>
        </StyledTitle>
    );
};

const StyledTitle = styled.div`
    max-width: 40%;

    h3 {
        font-size: 48px;
    }

    h1 {
        font-optical-sizing: auto;
        font-size: 72px;
    }

    p {
        margin: 20px 0px;
        font-size: 18px;
    }

    button {
        width: 40%;
        font-family: "Jersey15-Regular", sans-serif;
        font-optical-sizing: auto;
        font-weight: 500;
        background-color: ${"#e2a300"};
        font-size: 20px;
        border: none;
        border-radius: 5px;
        padding: 10px;
        box-shadow: 1px 1px 10px rgba(226, 163, 0, 0.58);
        transition: 0.5s;
    }

    button:hover {
        background-color: ${theme.colors.text};
        cursor: pointer;
`;
