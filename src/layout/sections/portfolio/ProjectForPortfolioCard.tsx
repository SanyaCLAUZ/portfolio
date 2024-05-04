import React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import styled from "styled-components";
import { YellowStyledButton } from "../../../components/globalYellowStyledButton/YellowStyledButton";

type ProjectForPortfolioCardType = {
  src?: string;
  title?: string;
  body?: string;
};

export const ProjectForPortfolioCard = (props: ProjectForPortfolioCardType) => {
  return (
    <StyledProjectForPortfolioCard>
      <FlexWrapper justify="center">
        <YellowStyledButton rotation={180} />
        <div>
          <div>
            <img src={props.src}></img>
          </div>
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
            <strong>
              <a>More →</a>
            </strong>
          </div>
        </div>
        <YellowStyledButton />
      </FlexWrapper>
    </StyledProjectForPortfolioCard>
  );
};

const StyledProjectForPortfolioCard = styled.div`
  margin: 50px;
  border-radius: 40px;
  img {
    margin-top: 40px;
    border-radius: 40px;
    width: 40%;
  }
  div div{
    background: linear-gradient(to right, #414141, #2d2d2d);
    border-radius: 20px;
  }
  a {
    color: #e2a100;
  }
`;
