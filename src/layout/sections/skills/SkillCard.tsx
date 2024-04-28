import React from "react";
import styled from "styled-components";
import iconsSprite from "../../../assets/images/code-svg.svg";

type SkillCardTypes = {
  iconId: string;
  text?: string;
};

export const SkillCard = (props: SkillCardTypes) => {
  return (
    <StyledSkillCard>
      <div>
        <svg
          width="100px"
          height="50px"
          fill="none"
          stroke="#00C4F0"
          xmlns="http://www.w3.org/2000/svg"
        >
          <use xlinkHref={`${iconsSprite}#${props.iconId}`} />
        </svg>
        <span>{props.text}</span>
      </div>
    </StyledSkillCard>
  );
};

const StyledSkillCard = styled.div`
  width: 270px;
  height: 270px;
  border-radius: 29px;
  margin: 20px;
  background-color: #2a2a2a;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  
  div {
    text-align: center;
    height: 100%;
  }
`;
