/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import Logo from "../../svgs/logo.svg";
import SearchIcon from "../../svgs/searchIcon.svg";
import StarIcon from "../../svgs/starIcon.svg";
import ChatIcon from "../../svgs/chatIcon.svg";
/* import { Container } from "./styles"; */

const Navigation: React.FC = (): JSX.Element => {
  return (
    <div className="flex items-center  justify-between p-5 h-2">
      <Logo />
      <SearchIcon />
      <StarIcon />
      <ChatIcon />
    </div>
  );
};

export default Navigation;
