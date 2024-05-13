import React from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

export const Menu = () => {
  return (
    <>
    <StyledMenu>
        <ul>
          <li>
            <a href={"/"}> Home </a>
          </li>
          <li>
            <a href=""> About </a>
          </li>
          <li>
            <a href=""> Portfolio </a>
          </li> 
          <li>
            <Link 
              to='/contact'>Contacts
            </Link>
            </li>
        </ul>
    </StyledMenu>
    </>
  );
};

const StyledMenu = styled.nav`
  color: white;
  ul {
    text-decoration: inherit;
    display: flex;
    gap: 30px;
  }
  a {
    all: unset;
  }
`;
