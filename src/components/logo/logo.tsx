import React from "react";
import iconsSprite from "../../assets/images/code-svg.svg";
import styled from "styled-components";

type IconPropsType = {
  iconId: string;
};

export const Logo = (props: IconPropsType) => {
  return (
    <StyledLogo href="/">
      <svg
        width="65"
        height="48"
        viewBox="0 0 65 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <use xlinkHref={`${iconsSprite}#${props.iconId}`} />
      </svg>
    </StyledLogo>
  );
};

const StyledLogo = styled.a`
  a,
  svg {
    width: 124px;
    height: 124px;
  }
`;
