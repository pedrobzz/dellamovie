/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";

/* import { Container } from "./styles"; */

interface HomeIconProps {
  onClick: () => void;
}

export const HomeIcon = ({ onClick }: HomeIconProps): JSX.Element => (
  <svg
    width="20.3"
    height="23.43"
    viewBox="0 0 18 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClick}
  >
    <path
      d="M5.21 9.07999C5.19 9.07999 5.17 9.07999 5.15 9.05999C4.48 8.15999 4.31 6.61999 4.26 6.02999C4.26 5.91999 4.13 5.84999 4.03 5.90999C1.93 7.07999 0 9.85999 0 12.54C0 17.14 3.2 21 8.7 21C13.85 21 17.4 17.02 17.4 12.54C17.4 6.66999 13.2 2.76999 9.47 1.00999C9.44825 0.998025 9.42353 0.992541 9.39877 0.994181C9.374 0.99582 9.35022 1.00452 9.33024 1.01924C9.31026 1.03396 9.29491 1.0541 9.28601 1.07727C9.2771 1.10044 9.27502 1.12567 9.28 1.14999C9.76 4.30999 9.1 7.74999 5.21 9.07999V9.07999Z"
      fill="#F26A6C"
    />
  </svg>
);

export default HomeIcon;
