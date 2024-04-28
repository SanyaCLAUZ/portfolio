import React from "react";
import styled from "styled-components";

export const Title = () => {
  return (
    <StyledTitle>
      <h2>Hello</h2>
      <h1>I'M ALEX LENDIEL</h1>
      <div>
        I've been doing web design, front-end and back-end development for a
        year now. Do you need a website design, site layout, or maybe a turnkey
        website? Then contact me
      </div>
      <button>CONTACT ME</button>
    </StyledTitle>
  );
};

const StyledTitle = styled.div`
  width: 430px;
  h3 {
    font-size: 48px;
  }
  h1 {
    font-size: 72px;
  }
  div {
    font-size: 18px;
  }
`;
