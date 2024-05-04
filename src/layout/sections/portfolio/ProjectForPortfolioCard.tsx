import React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import styled from "styled-components";

type ProjectForPortfolioCardType = {
  src?: string;
  title?: string;
  body?: string;
};

export const ProjectForPortfolioCard = (props: ProjectForPortfolioCardType) => {
  return (
    <StyledProjectForPortfolioCard>
      <FlexWrapper justify="center">
        <button>←</button>
        <div>
          <img src={props.src}></img>
          <div>
            <h3>{props?.title || "Default title"}</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut
              orci eu elit consequat posuere ut sed elit. Nulla et tristique
              felis. Morbi quis orci non purus blandit fringilla. Etiam et
              mollis eros. Duis venenatis vulputate lacus, non tristique eros
              placerat vel. Nam nec magna lacus. Etiam euismod egestas mauris
              nec mollis. Phasellus efficitur et ex vel condimentum. Cras enim
              purus, tempor sed massa vel, accumsan bibendum magna. Nullam
              hendrerit cursus purus, sit amet viverra arcu gravida vel.
            </p>
            <a>More →</a>
          </div>
        </div>
        <button>→</button>
      </FlexWrapper>
    </StyledProjectForPortfolioCard>
  );
};

const StyledProjectForPortfolioCard = styled.div`
  padding: 50px;
  text-align: center;
  height: 80vh;
  border-radius: 40px;
  width: 60%;
  img {
    border-radius: 20px;
    width: 40%;
  }
  div div {
    background: linear-gradient(to right, #414141, #2d2d2d);
    border-radius: 20px;
  }

  p {
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
