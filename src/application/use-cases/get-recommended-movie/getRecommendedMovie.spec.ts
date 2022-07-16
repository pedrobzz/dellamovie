import { describe, it, expect, beforeAll } from "@jest/globals";
import { config } from "dotenv";
import { makeTheMovieDB } from "../../factories";
import { GetRecommendedMovie } from "./getRecommendedMovie";

const makeSUT = () => {
  const movieDB = makeTheMovieDB();
  const sut = new GetRecommendedMovie(movieDB);
  return { movieDB, sut };
};

describe("GetRecommendedMovie", () => {
  beforeAll(() => {
    config();
  });
  it("should be defined", () => {
    const { sut } = makeSUT();
    expect(sut).toBeDefined();
  });

  it("Should be able to get recommended movie by actors", async () => {
    const { sut } = makeSUT();
    const actors = ["74568"]; // "Chris Hemsworth"
    const movieQuery = await sut.getRecommendedMoviesByActors(actors);
    expect(movieQuery).toBeDefined();
    const { results: movies } = movieQuery;
    expect(movies).toBeDefined();
    expect(movies.length).toBeGreaterThan(0);
    expect(movies.every(movie => movie.vote_average > 6)).toBeTruthy();
    expect(movies[0].popularity > movies[1].popularity).toBeTruthy();
  });

  it("Should be able to get recommended movie by Genre", async () => {
    const { sut } = makeSUT();
    const genre = "28"; // Action
    const movieQuery = await sut.getRecommendedMoviesByGenre(genre);
    expect(movieQuery).toBeDefined();
    const { results: movies } = movieQuery;
    expect(movies).toBeDefined();
    expect(movies.length).toBeGreaterThan(0);
    expect(movies.every(movie => movie.vote_average > 6)).toBeTruthy();
    expect(movies[0].popularity > movies[1].popularity).toBeTruthy();
  });

  it("Should be able to get trending movies", async () => {
    const { sut } = makeSUT();
    const movieQuery = await sut.getTrendingMovies();
    expect(movieQuery).toBeDefined();
    const { results: movies } = movieQuery;
    expect(movies).toBeDefined();
    expect(movies.length).toBeGreaterThan(0);
  });
});
