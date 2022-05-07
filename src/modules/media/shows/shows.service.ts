import { TMDBInstance } from "../../../shared/api/tmdb.api";
import { Show, ShowCast, ShowDetails } from "./shows.type";

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
  getShowDetails: async (id: number): Promise<ShowDetails> => {
    const { data } = await TMDBInstance.get(`/tv/${id}`);
    return data;
  },
  getShowCast: async (id: number): Promise<ShowCast[]> => {
    const { data: showCredits } = await TMDBInstance.get(`/tv/${id}/credits`);

    return showCredits.cast.filter((showCast: ShowCast) =>
      Boolean(showCast.profile_path)
    );
  },
};
