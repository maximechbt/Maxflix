import { useQuery } from "react-query";

import { getMediaWithBest } from "../../shared/utils/media.utils";
import { Movie, MovieService } from "./movies.service";

export const useTrendingMovies = () =>
  useQuery("trendingMovies", MovieService.getTrendingMovies, {
    select: (data) => getMediaWithBest<Movie>(data),
  });
