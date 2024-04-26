import styled from "styled-components";
import { Logo } from "../../../../components/logo/logo";
import { Menu } from "../../../../components/menu/Menu";

export const Header = () => {
  return (
    <StyledHeader>
      <Logo iconId={"logo"}></Logo>
      <Menu></Menu>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: #728fa8;
  display: flex;
  justify-content: space-between;
`;
