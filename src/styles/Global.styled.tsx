import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";

export const GlobalStyled = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        margin: 0;
        color: ${theme.colors.text};
        font-family: "Ubuntu Sans", sans-serif;
        font-optical-sizing: auto;
        font-weight: 100;
        font-style: normal;
        font-variation-settings: "wdth" 100;
        background: linear-gradient(to right, #414141, #2d2d2d);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        line-height: 1.2;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }
    
    section{
        padding: 100px 0;
    }

    section:nth-of-type(3n+1) {
        background: ${theme.colors.secondaryBg};
    }
`