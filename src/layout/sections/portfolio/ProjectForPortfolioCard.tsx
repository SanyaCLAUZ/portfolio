import React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import styled from "styled-components";
import { YellowStyledButton } from "../../../components/globalYellowStyledButton/YellowStyledButton";
import {theme} from "../../../styles/Theme";

type ProjectForPortfolioCardType = {
  src?: string;
  title?: string;
  body?: string;
};

export const ProjectForPortfolioCard = (props: ProjectForPortfolioCardType) => {
  return (
    <StyledProjectForPortfolioCard>
      <YellowStyledButton rotation={180} stroke={`${theme.colors.text}`}/>
        <div id={"card"}>
            <img src={props.src} alt={"card"}></img>
          <StyledDescriptionPortfolioCard>
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
          </StyledDescriptionPortfolioCard>
        </div>
      <YellowStyledButton stroke={`${theme.colors.text}`}/>
    </StyledProjectForPortfolioCard>
  );
};
const StyledDescriptionPortfolioCard = styled.div`
  padding: 10% 5%;
  margin: auto 0;
  & p {
    margin: 30px;
  }
  max-width: 45%;
`

const StyledProjectForPortfolioCard = styled.div`
  display: flex;
  max-height: 30%;
  margin: 40px auto;
  border-radius: 40px;
  
  img {
    border-radius: 40px;
    height: 85%;
    margin: auto 0;
  }
  
  #card {
    background: linear-gradient(to right, #414141, #2d2d2d);
    border-radius: 20px;
    display: flex;
    justify-content: space-around;
    max-width: 80%;
  }
  
  a {
  color: #e2a100;
  }
  
`;
