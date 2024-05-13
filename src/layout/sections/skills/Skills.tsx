import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SkillCard } from "./SkillCard";

export const Skills = () => {
  return (
    <StyledSkills>
      <FlexWrapper justify="center" wrap="wrap">
        <SkillCard
          iconId={"presentation"}
          text={"Frontend"}
          height="75px"
          width="75px"
          viewBox="0 0 25 25"
        />
        <SkillCard
          iconId={"presentation"}
          text={"Frontend"}
          height="75px"
          width="75px"
          viewBox="0 0 25 25"
        />
        <SkillCard
          iconId={"presentation"}
          text={"Frontend"}
          height="75px"
          width="75px"
          viewBox="0 0 25 25"
        />
        <SkillCard
          iconId={"presentation"}
          text={"Frontend"}
          height="75px"
          width="75px"
          viewBox="0 0 25 25"
        />
        <SkillCard
          iconId={"presentation"}
          text={"Frontend"}
          height="75px"
          width="75px"
          viewBox="0 0 25 25"
        />
        <SkillCard
          iconId={"presentation"}
          text={"Frontend"}
          height="75px"
          width="75px"
          viewBox="0 0 25 25"
        />
        <SkillCard
          iconId={"presentation"}
          text={"Frontend"}
          height="75px"
          width="75px"
          viewBox="0 0 25 25"
        />
        
      </FlexWrapper>
    </StyledSkills>
  );
};

const StyledSkills = styled.div`
  min-height: 100vh;
  background: linear-gradient(to right, #414141, #2d2d2d);
  padding: 30px 50px;
`;
