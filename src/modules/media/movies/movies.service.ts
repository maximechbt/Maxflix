import { TMDBInstance } from "../../../shared/api/tmdb.api";
import { Movie, TMDBMovie } from "./movies.type";

export async function getTMDBMovie(id: number): Promise<TMDBMovie> {
  const { data } = await TMDBInstance.get(`/movie/${id}`);
  return data;
}

export const MovieService = {
  getTrendingMovies: async (): Promise<Movie[]> => {
    const {
      data: { results },
    } = await TMDBInstance.get("/trending/movie/day");

    return results;
  },
  getPopularMovies: async (): Promise<Movie[]> => {
    const {
      data: { results },
    } = await TMDBInstance.get("/trending/movie/week");

    return results;
  },
};
