import styled from "styled-components";
import {Logo} from "../../components/logo/logo";
import {Menu} from "../../components/menu/Menu";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {theme} from "../../styles/Theme";

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify="space-between" align = "center">
                <Logo iconId={"logo"} width="65px" height="50px"/>
                <Menu/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background: ${theme.colors.secondaryBg};
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 99999;    
`;
