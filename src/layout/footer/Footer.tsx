import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/logo";
import { FlexWrapper } from "../../components/FlexWrapper";
import { YellowStyledButton } from "../../components/globalYellowStyledButton/YellowStyledButton";

export const Footer = () => {
  return (
    <StyledFooter>
        <ul>
          <li>Home</li>
          <li>About me</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
        <ul>
          <li>Contact:</li>
          <li>E-mail: lendielusa@gmail.com</li>
          <li>Telegram: @sanyaclaus</li>
          <li>Phone: (646) 651-7369</li>
        </ul>
        <div>
          <div>
            <a href="/">
            <Logo iconId="logo" width="65px" height="48px" viewBox="0 0 48 65"></Logo>
            <YellowStyledButton rotation={-90} />
            </a>
          </div>
          <div>Copyright © 2021, Notitanic</div>
        </div>
    </StyledFooter>
  );
};
const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-around;
  background: linear-gradient(to right, #414141, #2d2d2d);
  li{
    list-style: none;
  }
  a {
    display: flex;
    justify-content: space-between;
  }
`;
