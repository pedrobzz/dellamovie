/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import HomeIcon from "../../svgs/homeIcon";
import SearchIcon from "../../svgs/SearchIcon";
import ExploreIcon from "../../svgs/ExploreIcon";
import ChatIcon from "../../svgs/ChatIcon";
/* import { Container } from "./styles"; */

const Navigation: React.FC = (): JSX.Element => {
  return (
    <div className="flex items-center  justify-between p-5 h-2">
      <HomeIcon onClick={console.log} />
      <SearchIcon onClick={console.log} />
      <ExploreIcon onClick={console.log} />
      <ChatIcon onClick={console.log} />
    </div>
  );
};

export default Navigation;
