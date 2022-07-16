import MovieDB from "node-themoviedb";
let mdb: MovieDB;
export const makeTheMovieDB = (): MovieDB => {
  if (!mdb) {
    mdb = new MovieDB(process.env.TMDB_API_KEY, { language: "pt-BR" });
  }
  return mdb;
};
