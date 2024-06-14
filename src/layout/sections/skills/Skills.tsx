import React from "react";
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SkillCard} from "./SkillCard";
import {Container} from "../../../components/Container";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <FlexWrapper justify="center" wrap="wrap" gap="40px">
                    <SkillCard
                        iconId={"presentation"}
                        text={"Frontend"}
                        stroke={"#00C4F0"}

                    />
                    <SkillCard
                        iconId={"chart"}
                        text={"Frontend"}
                        stroke={"#00C4F0"}

                    />
                    <SkillCard
                        iconId={"code"}
                        text={"Frontend"}
                        stroke={"#00C4F0"}

                    />
                    <SkillCard
                        iconId={"desktop"}
                        text={"Frontend"}
                        stroke={"#00C4F0"}
                    />
                    <SkillCard
                        iconId={"drone"}
                        text={"Frontend"}
                        stroke={"#00C4F0"}
                    />
                    <SkillCard
                        iconId={"chevron"}
                        text={"Frontend"}
                        stroke={"#00C4F0"}
                    />
                    <SkillCard
                        iconId={"chart"}
                        text={"Frontend"}
                        stroke={"#00C4F0"}
                    />
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    div:first-child {
        padding: 50px 0;
    }
`;
