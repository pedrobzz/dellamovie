/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import { useTRPC } from "../common/hooks/useTRPC";

const TestRPC: React.FC = (): JSX.Element => {
  const { useQuery } = useTRPC();
  const moviesQuery = useQuery(["recomendations.getTrending"], {
    refetchOnWindowFocus: false,
  });
  return (
    <div className="flex flex-col w-full items-center">
      <h1>This is a page to Test TRPC.</h1>
      <h1>Movies</h1>
      {/* {moviesQuery.data && <></>} */}
    </div>
  );
};

export default TestRPC;
