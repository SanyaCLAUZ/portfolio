import {createGlobalStyle} from "styled-components";

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
        color: #E4E4E4;
        font-family: "Ubuntu Sans", sans-serif;
        font-optical-sizing: auto;
        font-weight: 100;
        font-style: normal;
        font-variation-settings:
                "wdth" 100;
        background: linear-gradient(to right, #414141, #2d2d2d);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    a{
        text-decoration: none;
    }
    ul {
        list-style: none;
    }
`