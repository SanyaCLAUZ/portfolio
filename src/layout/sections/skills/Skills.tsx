import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SkillCard } from "./SkillCard";

export const Skills = () => {
  return (
    <StyledSkills>
      <FlexWrapper justify="center" wrap="wrap">
        <SkillCard iconId={"presentation"} text={"Frontend"} />
        <SkillCard iconId={"presentation"} text={"Frontend"} />
        <SkillCard iconId={"presentation"} text={"Frontend"} />
        <SkillCard iconId={"presentation"} text={"Frontend"} />
        <SkillCard iconId={"presentation"} text={"Frontend"} />
      </FlexWrapper>
    </StyledSkills>
  );
};

const StyledSkills = styled.div`
  min-height: 100vh;
  background: linear-gradient(to right, #414141, #2d2d2d);
  text-align: center;
  padding: 60px 30px 0 30px;
`;
