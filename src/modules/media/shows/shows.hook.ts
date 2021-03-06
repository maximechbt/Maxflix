import { useQuery } from "react-query";

import { getMediaWithBest } from "../media.utils";
import { ShowService } from "./shows.service";
import { Show } from "./shows.type";

export const useTrendingShows = () =>
  useQuery("trendingShows", ShowService.getTrendingShows, {
    select: (data: Show[]) => getMediaWithBest<Show>(data),
  });

export const usePopularShows = () =>
  useQuery("popularShows", ShowService.getPopularShows);

export const useShowDetails = (id: number) =>
  useQuery(["show", id], () => ShowService.getShowDetails(id));

export const useShowCast = (id: number) =>
  useQuery(["showCast", id], () => ShowService.getShowCast(id));
