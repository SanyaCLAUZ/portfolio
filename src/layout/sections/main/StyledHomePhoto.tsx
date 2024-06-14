import React from 'react';
import styled from "styled-components";
import photo from "../../../assets/images/portfolioPicture.webp";
import elipsMainBlockSVG from "../../../assets/images/elips_main_block.svg";
import {SkillsCircle} from "./SkillsCircle";

export const StyledHomePhoto = () => {
    return (
        <div style={{ position: 'relative' }}>
            <StyledPhoto src={photo} alt={"Lendiel_Photo"} />
            <StyledElipsMainBlockSVG src={elipsMainBlockSVG} alt="Elips Main Block" />
            <SkillsCircle />
        </div>
    );
};

const StyledPhoto = styled.img`
    max-height: 400px;
    width: auto;
    border: 1px solid yellow;
    position: relative;
    z-index: 1; /* Ensures SVG renders on top of photo */
`;

const StyledElipsMainBlockSVG = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 0; /* Ensures photo renders behind SVG */
    overflow: hidden; /* Clips overflowing SVG content */
`;
