import { useQuery } from "react-query";

import { getMediaWithBest } from "../../shared/utils/media.utils";
import { Show, ShowService } from "./shows.service";

export const useTrendingShows = () =>
  useQuery("trendingShows", ShowService.getTrendingShows, {
    select: (data: Show[]) => getMediaWithBest<Show>(data),
  });

export const usePopularShows = () =>
  useQuery("popularShows", ShowService.getPopularShows);
