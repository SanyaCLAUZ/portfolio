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
      <FlexWrapper justify="center" align={"center"}>
        <YellowStyledButton rotation={180} />
        <div id={"card"}>
            <img src={props.src} alt={"card"}></img>
          <div >
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
  width: 75%;
  margin: 50px auto;
  border-radius: 40px;
  
  img {
    border-radius: 40px;
    height: 30%;
  }
  
  #card {
    background: linear-gradient(to right, #414141, #2d2d2d);
    border-radius: 20px;
    display: flex;
    justify-content: space-around;
  }
  
  #card div{   
    max-width: 30%;
  }
  
  a {
  color: #e2a100;
  }
`;
