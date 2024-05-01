import React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import styled from "styled-components";

type ProjectForPortfolioCardType = {
  src?: string;
};

export const ProjectForPortfolioCard = (props: ProjectForPortfolioCardType) => {
  return (
    <StyledProjectForPortfolioCard>
      <FlexWrapper justify="center">
        <button>←</button>
        <div>
          <img src={props.src}></img>
          <div>
            <h3>Landing Ice-cream</h3>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut
              orci eu elit consequat posuere ut sed elit. Nulla et tristique
              felis. Morbi quis orci non purus blandit fringilla. Etiam et
              mollis eros. Duis venenatis vulputate lacus, non tristique eros
              placerat vel. Nam nec magna lacus. Etiam euismod egestas mauris
              nec mollis. Phasellus efficitur et ex vel condimentum. Cras enim
              purus, tempor sed massa vel, accumsan bibendum magna. Nullam
              hendrerit cursus purus, sit amet viverra arcu gravida vel.
            </div>
            <a>More →</a>
          </div>
        </div>
        <button>→</button>
      </FlexWrapper>
    </StyledProjectForPortfolioCard>
  );
};

const StyledProjectForPortfolioCard = styled.div`
  text-align: center;
  border-radius: 40px;
  padding: 50px;
  width: 60%;
  img {
    border-radius: 20px;
    width: 40%;
  }
  div {
    background: linear-gradient(to right, #414141, #2d2d2d);
    border-radius: 20px;
  }
  button {
    color: white;
    background: linear-gradient(to right, #e2a300, #e29500);
    height: 30px;
    border-radius: 24px;
  }
  a {
    color: #e2a100;
  }
`;
