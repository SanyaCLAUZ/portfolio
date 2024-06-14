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
                        stroke={"#00C4F0"}

                    />
                    <SkillCard
                        iconId={"chart"}
                        text={"Frontend"}
                        height="75px"
                        width="75px"
                        viewBox="0 0 25 25"
                        stroke={"#00C4F0"}

                    />
                    <SkillCard
                        iconId={"code"}
                        text={"Frontend"}
                        height="75px"
                        width="75px"
                        viewBox="0 0 25 25"
                        stroke={"#00C4F0"}

                    />
                    <SkillCard
                        iconId={"desktop"}
                        text={"Frontend"}
                        height="75px"
                        width="75px"
                        viewBox="0 0 25 25"
                        stroke={"#00C4F0"}
                    />
                    <SkillCard
                        iconId={"drone"}
                        text={"Frontend"}
                        height="75px"
                        width="75px"
                        viewBox="0 0 25 25"
                        stroke={"#00C4F0"}
                    />
                    <SkillCard
                        iconId={"chevron"}
                        text={"Frontend"}
                        height="75px"
                        width="75px"
                        viewBox="0 0 25 25"
                        stroke={"#00C4F0"}
                    />
                    <SkillCard
                        iconId={"chart"}
                        text={"Frontend"}
                        height="75px"
                        width="75px"
                        viewBox="0 0 25 25"
                        stroke={"#00C4F0"}
                    />
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    margin: 0 auto;
`;
