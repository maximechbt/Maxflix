import { TMDBInstance } from "../../../shared/api/tmdb.api";
import { Show } from "./shows.type";

const normalizeShow = (show: Show & { name: string }): Show => {
  return {
    ...show,
    title: show.name,
  };
};

export const ShowService = {
  getTrendingShows: async (): Promise<Show[]> => {
    const {
      data: { results: shows },
    } = await TMDBInstance.get("/trending/tv/day");

    return shows.map(normalizeShow);
  },
  getPopularShows: async (): Promise<Show[]> => {
    const {
      data: { results: shows },
    } = await TMDBInstance.get("/trending/tv/week");

    return shows.map(normalizeShow);
  },
};
