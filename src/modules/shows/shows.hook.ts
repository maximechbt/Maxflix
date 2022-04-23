import { useQuery } from "react-query";

import { getMediaWithBest } from "../../shared/utils/media.utils";
import { ShowService } from "./shows.service";
import { Show } from "./shows.type";

export const useTrendingShows = () =>
  useQuery("trendingShows", ShowService.getTrendingShows, {
    select: (data: Show[]) => getMediaWithBest<Show>(data),
  });

export const usePopularShows = () =>
  useQuery("popularShows", ShowService.getPopularShows);
