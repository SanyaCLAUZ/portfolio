import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

export const Menu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((item: string, index: number) => {
                    return <ListItem key={index}>
                        <Link to="/">
                            {item}
                        </Link>
                    </ListItem>
                })}
            </ul>
        </StyledMenu>
    );
};
const ListItem = styled.li`
     transition: 0.2s;
    :hover {
        color: #494949;
        cursor: pointer;
    }
`

const StyledMenu = styled.nav`
    ul {
        text-decoration: inherit;
        display: flex;
        gap: 30px;
    }
    a {
        all: unset;
    }    
`;
