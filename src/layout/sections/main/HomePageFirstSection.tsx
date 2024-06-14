import React from "react";
import styled from "styled-components";
import {Title} from "./Title";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {StyledHomePhoto} from "./StyledHomePhoto";

export const HomePageFirstSection = () => {
    return (
        //id "headerSection" for footer якорь
        <StyledHomePageFirstSection id={"headerSection"}>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"}>
                        <Title/>
                        <StyledHomePhoto/>
                </FlexWrapper>
            </Container>
        </StyledHomePageFirstSection>
    );
};

const StyledHomePageFirstSection = styled.section`
    height: 100vh;
    display: flex;
`;