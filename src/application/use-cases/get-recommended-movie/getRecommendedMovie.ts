import MovieDB from "node-themoviedb";

export class GetRecommendedMovie {
  constructor(private readonly movieDB: MovieDB) {}

  async getRecommendedMoviesByActors(
    actors: string[],
  ): Promise<MovieDB.Responses.Discover.Movie> {
    const movie = await this.movieDB.discover.movie({
      query: {
        with_cast: actors.join(","),
        "vote_average.gte": "6",
        sort_by: "popularity.desc",
      },
    });
    return movie.data;
  }

  async getRecommendedMoviesByGenre(
    genre: string,
  ): Promise<MovieDB.Responses.Discover.Movie> {
    const movie = await this.movieDB.discover.movie({
      query: {
        with_genres: genre,
        "vote_average.gte": "6",
        sort_by: "popularity.desc",
      },
    });
    return movie.data;
  }

  async getTrendingMovies(): Promise<MovieDB.Responses.Trending.GetTrending> {
    const movie = await this.movieDB.trending.getTrending({
      pathParameters: {
        media_type: "movie",
        time_window: "day",
      },
    });
    return movie.data;
  }
}
