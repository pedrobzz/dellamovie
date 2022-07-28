/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";

/* import { Container } from "./styles"; */
interface ExploreIconProps {
  onClick: () => void;
}

export const ExploreIcon = ({ onClick }: ExploreIconProps): JSX.Element => (
  <svg
    width="26.27"
    height="26.67"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClick}
  >
    <path
      d="M9.999 0C9.999 5.001 15 10 20 10C14.999 10 10 15.382 10 20C10 15.382 4.973 10 0 10C4.974 10 9.999 5.001 9.999 0Z"
      fill="#AAAAAA"
    />
  </svg>
);

export default ExploreIcon;
