import { Movie } from "../../entities"
export interface GetMovieDetails {
 getMovieDetails(id: string): Promise<Movie>
}

export namespace GetMovieDetails {
  export const endpoint = '/movie/';
}