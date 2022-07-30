/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import LogoTitleIcon from "../../svgs/LogoTitle";
/* import { Container } from "./styles"; */

const Header: React.FC = (): JSX.Element => {
  return (
    <div className="flex justify-center shrink-0 py-2">
      <LogoTitleIcon width="25%" />
    </div>
  );
};

export default Header;
