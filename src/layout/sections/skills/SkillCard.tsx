import React from "react";
import styled from "styled-components";
import iconsSprite from "../../../assets/images/code-svg.svg";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Icon } from "../../../components/icon/Icon";

type SkillCardTypes = {
  iconId: string;
  text?: string;
  width?: string;
  height?: string;
  viewBox?: string;
};

export const SkillCard = (props: SkillCardTypes) => {
  return (
    <StyledSkillCard>
      <FlexWrapper direction="column">
        <Icon
          iconId={props.iconId || "logo"}
          width={props.width || "65px"}
          height={props.height || "50px"}
          viewBox={props.viewBox || "0 0 50 50"}
        ></Icon>
        <span>{props.text}</span>
      </FlexWrapper>
    </StyledSkillCard>
  );
};

const StyledSkillCard = styled.div`
span {
  font-size: 24px;
  color:  #E4E4E4;

}
  width: 270px;
  height: 270px;
  border-radius: 29px;
  margin: 20px;
  background-color: #2a2a2a;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
