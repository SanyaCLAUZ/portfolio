import React from "react";
import iconsSprite from "../../assets/images/code-svg.svg";
import styled from "styled-components";
import { Icon } from "../icon/Icon";

type LogoPropsType = {
  iconId: string;
  width?: string;
  height?: string;
  viewBox?: string;
};

export const Logo = (props: LogoPropsType) => {
  return (
    <a href="/">
      <Icon iconId={props.iconId} width={props.width} height={props.height} />
    </a>
  );
};
