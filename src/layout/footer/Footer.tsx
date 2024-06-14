import React from "react";
import styled from "styled-components";
import {Logo} from "../../components/logo/logo";
import {YellowStyledButton} from "../../components/globalYellowStyledButton/YellowStyledButton";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";



export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper justify="space-between" align={"center"}>
                    <ul>
                        <li>Home</li>
                        <li>About me</li>
                        <li>Portfolio</li>
                        <li>Contact</li>
                    </ul>
                    <ul>
                        <li>Contact:</li>
                        <li>E-mail: lendielusa@gmail.com</li>
                        <li>Telegram: @sanyaclaus</li>
                        <li>Phone: (646) 651-7369</li>
                    </ul>
                    <div>
                        <div id={"websiteScroll"}>
                            <a href="/">
                                <Logo iconId="logo" width="65px" height="48px" viewBox="0 0 48 65"></Logo>
                            </a>
                            <a href="#headerSection">
                                <YellowStyledButton rotation={-90}/>
                            </a>
                        </div>
                        <div>Copyright © 2021, Notitanic</div>
                    </div>
                </FlexWrapper>
            </Container>
        </StyledFooter>
    );
};
const StyledFooter = styled.footer`
    #websiteScroll {
        display: flex;
        justify-content: space-between;
    }
`;
