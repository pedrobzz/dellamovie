/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import HomeIcon from "../../svgs/HomeIcon";
import SearchIcon from "../../svgs/SearchIcon";
import StarIcon from "../../svgs/StarIcon";
import ChatIcon from "../../svgs/ChatIcon";
import Link from "next/link";
/* import { Container } from "./styles"; */

const Navigation: React.FC = (): JSX.Element => {
  return (
    <div className="flex items-center  justify-between p-5 h-2 shrink-0">
      <Link href="/">
        <a>
          <HomeIcon />
        </a>
      </Link>
      <Link href="/explore">
        <a>
          <SearchIcon />
        </a>
      </Link>
      <Link href="/match">
        <a>
          <StarIcon />
        </a>
      </Link>
      <Link href="/chat">
        <a>
          <ChatIcon />
        </a>
      </Link>
    </div>
  );
};

export default Navigation;
