import compact from "lodash/compact";

import { TMDBInstance } from "../../shared/api/tmdb.api";
import { TraktInstance } from "../../shared/api/trakt.api";
import { TraktMedia } from "../../shared/types/media.type";
import { Show, TMDBShow } from "./shows.type";

async function populateWithTMDB(shows: TraktMedia[]): Promise<Show[]> {
  return compact(
    await Promise.all(
      shows.map(async (show: TraktMedia) => {
        try {
          const TMDBShow = await getTMDBShow(show.ids.tmdb);
          if (!TMDBShow?.backdrop_path) return;
          return {
            year: show.year,
            ids: show.ids,
            watchers: show.watchers,
            backdrop_path: TMDBShow.backdrop_path,
            poster_path: TMDBShow.poster_path,
            overview: TMDBShow.overview,
            title: TMDBShow.name,
            trackObject: show,
            type: "show",
          };
        } catch (error) { }
      })
    )
  );
}

async function getTMDBShow(id: number): Promise<TMDBShow> {
  const { data } = await TMDBInstance.get(`/tv/${id}`);
  return data;
}

export const ShowService = {
  getTrendingShows: async (): Promise<Show[]> => {
    const { data } = await TraktInstance.get("/shows/trending?limit=25");
    return populateWithTMDB(
      data.map((item: { show: TraktMedia; watchers: number }) => ({
        ...item.show,
        watchers: item.watchers,
      }))
    );
  },
  getPopularShows: async (): Promise<Show[]> => {
    const { data } = await TraktInstance.get("/shows/popular?limit=25");
    return populateWithTMDB(data);
  },
};
