import { GetRecommendedMovies } from "../../use-cases";
import { makeTheMovieDB } from "../makeTheMovieDB";

export const makeGetRecommendedMovies = (): GetRecommendedMovies => {
  return new GetRecommendedMovies(makeTheMovieDB());
};
