import React from "react";
import styled from "styled-components";
import iconsSprite from "../../../assets/images/code-svg.svg";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Icon } from "../../../components/icon/Icon";
import {theme} from "../../../styles/Theme";

type SkillCardTypes = {
  iconId: string;
  text?: string;
  width?: string;
  height?: string;
  viewBox?: string;
  fill?: string;
  stroke?: string;
};

export const SkillCard = (props: SkillCardTypes) => {
  return (
    <StyledSkillCard>
      <FlexWrapper direction="column" justify={"space-around"} align="center" style={{ height: "100%" }}>
        <Icon
          iconId={props.iconId || "logo"}
          width={props.width || "65px"}
          height={props.height || "50px"}
          viewBox={props.viewBox || "0 0 50 50"}
          fill={props.fill || "none"}
          stroke={props.stroke || "none"}
        ></Icon>
        <span>{props.text}</span>
      </FlexWrapper>
    </StyledSkillCard>
  );
};

const StyledSkillCard = styled.div`
  span {
    font-size: 24px;
    color: ${theme.colors.text};
    user-select: none;
  }

  :hover {
    background-color: #313131;
  }

  transition: 0.7s;
  width: 250px;
  height: 250px;
  border-radius: 29px;
  margin: 20px;
  background-color: #2a2a2a;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
