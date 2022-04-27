import compact from "lodash/compact";

import { TMDBInstance } from "../../../shared/api/tmdb.api";
import { TraktInstance } from "../../../shared/api/trakt.api";
import { TraktMedia } from "../media.type";
import { Movie, TMDBMovie } from "./movies.type";

export async function getTMDBMovie(id: number): Promise<TMDBMovie> {
  const { data } = await TMDBInstance.get(`/movie/${id}`);
  return data;
}

export async function populateWithTMDB(movies: TraktMedia[]): Promise<Movie[]> {
  return compact(
    await Promise.all(
      movies.map(async (movie: TraktMedia) => {
        try {
          const TMDBMovie = await getTMDBMovie(movie.ids.tmdb);
          if (!TMDBMovie?.backdrop_path) return;
          return {
            year: movie.year,
            ids: movie.ids,
            watchers: movie.watchers,
            ...TMDBMovie,
            backdrop_path: TMDBMovie.backdrop_path,
            poster_path: TMDBMovie.poster_path,
            overview: TMDBMovie.overview,
            title: TMDBMovie.title,
            trackObject: movie,
            type: "movie",
          };
        } catch (error) {}
      })
    )
  );
}

export const MovieService = {
  getTrendingMovies: async (): Promise<Movie[]> => {
    const { data } = await TraktInstance.get("/movies/trending?limit=25");

    return populateWithTMDB(
      data.map((item: { movie: TraktMedia; watchers: number }) => ({
        ...item.movie,
        watchers: item.watchers,
      }))
    );
  },
  getPopularMovies: async (): Promise<Movie[]> => {
    const { data } = await TraktInstance.get("/movies/popular?limit=25");
    return populateWithTMDB(data);
  },
};
