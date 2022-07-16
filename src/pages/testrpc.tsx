/* eslint-disable @typescript-eslint/no-unused-vars */

import Image from "next/image";
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
      <div className="grid grid-cols-10 gap-10">
        {moviesQuery.data &&
          moviesQuery.data.results.map(movie => {
            return (
              <div key={movie.id}>
                <Image
                  src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`}
                  width={300}
                  height={450}
                ></Image>
                {movie.title}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default TestRPC;
