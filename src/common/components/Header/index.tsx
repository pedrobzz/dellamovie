/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import LogoTitleIcon from "../../svgs/LogoTitle";
/* import { Container } from "./styles"; */

const Header: React.FC = (): JSX.Element => {
  return (
    <div className="flex justify-center ">
      <LogoTitleIcon onClick={console.log} />
    </div>
  );
};

export default Header;
