import { useQuery } from "react-query";

import { getMediaWithBest } from "../../shared/utils/media.utils";
import { MovieService } from "./movies.service";
import { Movie } from "./movies.type";

export const useTrendingMovies = () =>
  useQuery("trendingMovies", MovieService.getTrendingMovies, {
    select: (data) => getMediaWithBest<Movie>(data),
  });

export const usePopularMovies = () =>
  useQuery("popularMovies", MovieService.getPopularMovies);
