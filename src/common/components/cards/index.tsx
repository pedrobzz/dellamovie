/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */

import MovieDB from "node-themoviedb";
import React from "react";

interface CardsProps {
  data: MovieDB.Responses.Trending.GetTrending;
  onClick: () => void;
}

const cards: React.FC<CardsProps> = ({ data, onClick }): JSX.Element => {
  return (
    <div className="relative content-center z-1">
      {data &&
        data.results.map(movie => (
          <div key={movie.id} className="overflow-hidden rounded-lg absolute ">
            <img
              className="cover"
              src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`}
            />
          </div>
        ))}
      <button onClick={onClick} />
    </div>
  );
};

export default cards;
