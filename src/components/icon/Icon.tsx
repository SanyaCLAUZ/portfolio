import React from "react";
import iconsSprite from "../../assets/images/code-svg.svg";

type IconPropsType = {
  iconId: string;
  width?: string;
  height?: string;
  viewBox?: string;
  fill?: string;
  stroke?: string;
};

export const Icon = (props: IconPropsType) => {
  return (
    <svg
      width={props.width || "65px"}
      height={props.height || "50px"}
      viewBox={props.viewBox || "0 0 65 50"}
      fill={props.fill || "none"}
      stroke={props.stroke || "#00C4F0"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <use xlinkHref={`${iconsSprite}#${props.iconId}`} />
    </svg>
  );
};
