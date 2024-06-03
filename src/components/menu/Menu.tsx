import React from "react";
import styled from "styled-components";
import {theme} from "../../styles/Theme";

export const Menu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((item: string, index: number) => {
                    return <ListItem key={index}>
                        <Link href={item}>
                            {item}
                            <Mask><span>{item}</span></Mask>
                            <Mask><span>{item}</span></Mask>
                        </Link>
                    </ListItem>
                })}
            </ul>
        </StyledMenu>
    );
};

const Link = styled.a`
    color: transparent;
`

const StyledMenu = styled.nav`
    ul {
        text-decoration: inherit;
        display: flex;
        gap: 30px;
    }
`;

const Mask = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    height: 50%;
    overflow-y: hidden;
    color: ${theme.colors.text};

    & + & {
        top: 50%;

        span {
            display: inline-block;
            transform: translateY(-50%);
        }
    }
`

const ListItem = styled.li`
    position: relative;

    &::before {
        scale: 0;
        content: "";
        display: inline-block;
        height: 1px;
        background-color: ${theme.colors.buttonColorNotLinear};
        position: absolute;
        top: 50%;
        left: -2%;
        right: -2%;
        z-index: 1;
    }

    &:hover {
        &:before{
            scale: 1;
        }
        ${Mask} {
            color: ${theme.colors.buttonColorNotLinear};
            transition: 0.2s;
            transform: skewX(12deg) translateX(1%);

            & + ${Mask} {
            transition: 0.2s;
            transform: skewX(12deg) translateX(-1%);
            }
        }
        }
`