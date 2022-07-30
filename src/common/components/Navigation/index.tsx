/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { createRef, useState } from "react";
import HomeIcon from "../../svgs/HomeIcon";
import SearchIcon from "../../svgs/SearchIcon";
import StarIcon from "../../svgs/StarIcon";
import ChatIcon from "../../svgs/ChatIcon";
import Link from "next/link";
import { useRouter } from "next/router";
import Ripple from "../Ripple";

const Navigation: React.FC = (): JSX.Element => {
  const router = useRouter();
  const links = [
    {
      href: "/",
      icon: <HomeIcon width="22px" active={router.pathname === "/"} />,
    },
    {
      href: "/explore",
      icon: (
        <SearchIcon width="28.2px" active={router.pathname === "/explore"} />
      ),
    },
    {
      href: "/match",
      icon: <StarIcon width="24px" active={router.pathname === "/matches"} />,
    },
    {
      href: "/chat",
      icon: <ChatIcon active={router.pathname === "/chat"} />,
    },
  ];
  return (
    <div className="w-screen flex items-center justify-between shrink-0 shadow-[0px_0px_4px_rgba(0,0,0,0.4)]">
      {links.map((l, i) => (
        <Link key={`${l.href}`} href={l.href}>
          <a>
            <Ripple
              className={`rounded-md w-[${
                100 / links.length
              }%] h-full py-3 px-5`}
              rippleOptions={{
                rippleColor: "rgba(0,0,0,0.2)",
              }}
            >
              {l.icon}
            </Ripple>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
