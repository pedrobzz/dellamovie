/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";

/* import { Container } from "./styles"; */

const BaseLayout = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Header />
      <div className="grow">{children}</div>
      <Navigation />
    </div>
  );
};

export default BaseLayout;
