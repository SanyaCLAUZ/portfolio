import React from "react";
import styled from "styled-components";
import { Icon } from "../icon/Icon";

type YellowStyledButtonProp = {
  rotation?: number;
};

export const YellowStyledButton = (props: YellowStyledButtonProp) => {
  return (
    <StyledYellowStyledButton {...props}>
      <Icon
        iconId="arrow"
        width="36px"
        height="36px"
        viewBox="0 0 36 36"
      ></Icon>
    </StyledYellowStyledButton>
  );
};

const StyledYellowStyledButton = styled.button<YellowStyledButtonProp>`
  border: none;
  display: block;
  margin: auto;
  text-align: center;
  color: white;
  background: linear-gradient(to right, #e2a300, #e29500);
  height: 50px;
  border-radius: 30px;
  transform: rotate(
    ${(props) => (props.rotation ? `${props.rotation}deg` : "0deg")}
  );
`;
