import React from "react";
import iconsSprite from "../../assets/images/code-svg.svg";
import styled from "styled-components";

type IconPropsType = {
  iconId: string;
  width?: string;
  height?: string;
  viewBox?: string;
};

export const Logo = (props: IconPropsType) => {
  return (
    <StyledLogo href="/">
      <svg
        width={props.width || "65px"}
        height={props.height || "50px"}
        viewBox={props.viewBox || "0 0 65 50"}
        fill="none"
        stroke="white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <use xlinkHref={`${iconsSprite}#${props.iconId}`} />
      </svg>
    </StyledLogo>
  );
};

const StyledLogo = styled.a``;
