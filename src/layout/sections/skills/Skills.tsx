import React from "react";
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SkillCard} from "./SkillCard";
import {Container} from "../../../components/Container";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
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
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    margin: 0 auto;
`;
