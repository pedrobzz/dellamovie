import MovieDB from "node-themoviedb";
let mdb: MovieDB;
export const makeTheMovieDB = (): MovieDB => {
  if (!mdb) {
    if (!process.env.TMDB_API_KEY)
      throw new Error("TMDB_API_KEY is not defined");
    mdb = new MovieDB(process.env.TMDB_API_KEY, { language: "pt-BR" });
  }
  return mdb;
};
