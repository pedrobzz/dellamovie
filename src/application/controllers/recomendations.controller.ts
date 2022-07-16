import * as trpc from "@trpc/server";
// import { z } from "zod";
import { makeGetRecommendedMovies } from "../factories/use-cases";

export const recomendationsController = trpc.router().query("getTrending", {
  async resolve() {
    const recommendedMovies = makeGetRecommendedMovies();
    const trendingMovies = await recommendedMovies.getTrendingMovies();
    return trendingMovies;
  },
});
