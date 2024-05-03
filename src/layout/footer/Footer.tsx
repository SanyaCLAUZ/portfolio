import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/logo";

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
        <Logo iconId="logo" width="40px" height="40px"></Logo>
        <button>|</button>
        </div>
        <div>Copyright © 2021, Notitanic</div>
      </div>
    </StyledFooter>
  );
};
const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  background: linear-gradient(to right,#414141,#2d2d2d);
`;