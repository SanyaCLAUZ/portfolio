import styled from "styled-components";
import { Logo } from "../../components/logo/logo";
import { Menu } from "../../components/menu/Menu";

export const Header = () => {
  return (
    <StyledHeader>
      <Logo iconId={"logo"} width="65px" height="50px"/>
      <Menu/>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background: linear-gradient(to right, #2c2c2c, #1c1c1c);
  display: flex;
  justify-content: space-between;
`;
