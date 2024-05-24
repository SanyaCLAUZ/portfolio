import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

export const Menu = () => {
  return (
    <StyledMenu>
        <ul>
          <li>
            <Link to={"/"}> Home </Link>
          </li>
          <li>
            <Link to={"/"}> About </Link>
          </li>
          <li>
            <Link to={"/"}> Portfolio </Link>
          </li> 
          <li>
            <Link 
              to={'/contact'}>Contacts
            </Link>
            </li>
        </ul>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  ul {
    text-decoration: inherit;
    display: flex;
    gap: 30px;
  }
li{
  transition: 0.2s;
}
  a {
    all: unset;
  }

  li:hover {
    color: #494949;
    cursor: pointer;
  }
`;
